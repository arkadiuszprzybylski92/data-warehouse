const mongoose = require('mongoose');

const WeatherSchema = mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    lon: {
        type: Number,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    clouds: {
        type: String,
        required: true
    },
    temp: {
        type: Number,
        required: true
    },
    visibility: {
        type: Number,
        required: true
    },
    wind: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Weather', WeatherSchema);