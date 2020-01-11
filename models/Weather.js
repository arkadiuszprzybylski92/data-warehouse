const mongoose = require('mongoose');

const WeatherSchema = mongoose.Schema({
    coord: {
        type: Object,
        required: true
    },
    weather: {
        type: Array,
        required: true
    },
    base: {
        type: String,
        required: true
    },
    main: {
        type: Object,
        required: true
    },
    visibility: {
        type: Number,
        required: true
    },
    wind: {
        type: Object,
        required: true
    },
    clouds: {
        type: Object,
        required: true
    },
    dt: {
        type: Number,
        required: true
    },
    sys: {
        type: Object,
        required: true
    },
    timezone: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cod: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Weather', WeatherSchema);