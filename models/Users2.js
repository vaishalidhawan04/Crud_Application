const mongoose = require("mongoose");
const user2Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,  
    },
    email: {
        type: String,
        required: true,
    },
    // phone: {
    //     type: String,
    //     required: true,
    // },
    mobile: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },

    created: {
        type: Date,
        required: true,
        default: Date.now,
    }
});

module.exports = mongoose.model('Users2', user2Schema);