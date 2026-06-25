const mongoose = require('mongoose');

const Hunter = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rank: {
        type: Number,
        required: true
    },
    weapon: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Hunter', Hunter);