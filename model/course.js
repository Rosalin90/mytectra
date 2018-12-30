var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    trainer: {
        type: String,
        required: true
    }
});

var Course = module.exports = mongoose.model('course', courseSchema);