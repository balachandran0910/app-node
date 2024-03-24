const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        },
        mobile: {
            type: Number,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        image: {
            type: String,
        },
        designation: {
            type: String,
        },
        date_of_joining: {
            type: String,
        },
        status: {
            type: Boolean,
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);
