const express = require('express');
const router = express.Router();
const Weather = require('../models/Weather');
const fetch = require('node-fetch');

//get all weather objects
router.get('/', async (req, res) => {
    try {
        const posts = await Weather.find();
        res.json(posts);
    } catch (error) {
        res.json({message: error})
    }
});

//adding weather object
router.post('/', (req, res) => {
    const cityParam = req.body.city;
    const apiUrl = process.env.API_URL.replace('cityparam', cityParam);

    fetch(apiUrl)
        .then(res => res.json())
        .then(async data => {
            const weather = new Weather(data);
            try {
                const savedWeather = await weather.save(weather);
                res.json(savedWeather);
            } catch (error) {
                res.json({message: error});
            }
        })
        .catch(err => {
            res.json({message: err});
        });
});

//delete weather object
router.delete('/', async (req, res) => {
    try {
        const removedWeather = await Weather.remove({});
        res.json({message: removedWeather});
    } catch (err) {
        res.json({message: err});
    }
});

//update weather object
router.patch('/:weatherId', async (req, res) => {
    try {
        const updatedWeather = await Weather.updateOne(
            {_id: req.params.weatherId},
            {$set: {}}
        );
        res.json({message: updatedWeather});
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;