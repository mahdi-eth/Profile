const express = require("express");
const route = express.Router();

exports.saveUserRoute = route.post("/save-user", require("../controller/saveuser").controllSavingUser);