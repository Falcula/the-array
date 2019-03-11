const mongoose = require('mongoose');

const entry = mongoose.model('Entry',{
    name: { type: String, required: true },
    description: String,
    date: String,
    image: String 
});

module.exports = entry;