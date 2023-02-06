// requirements
const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");

// configurations
server.use(cors());
server.use(express.json({ extended: false }));
mongoose
    .connect("mongodb://localhost:27017/profile")
    .then(() => console.log("DB connected"));

// Handling requests

server.use("/api", require("./routes").saveUserRoute);
server.get("/", require("./controller/showUserInformatoon").showUserInformation);

server.listen(3000, () => console.log("Server runnin'"));
