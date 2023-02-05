const mongoose = require('mongoose');

const User = mongoose.model("User", {
        username: String,
        phoneNumber: String,
        email: String,
        website: String,
        address: String,
        picture: String,
        color: String,
    })

module.exports = { User }