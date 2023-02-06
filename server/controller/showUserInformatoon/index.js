const mongoose = require("mongoose");
const { User } = require("../../model/user/index");

const showUserInformation = (_, res) => {
    User.find().then((data) => {
        res.json({ userData: data[0] });
    });
};

module.exports = {
    showUserInformation
};
