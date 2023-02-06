const mongoose = require("mongoose");
const { User } = require("../../model/user/index");

const showUserInformation = (_, res) => {
    User.find().then((data) => {
        res.json({ test: data[0] });
    });
};

module.exports = {
    showUserInformation
};
