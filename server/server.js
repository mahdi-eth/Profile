// requirements
const express = require("express");
const server = express();
const cors = require('cors');

// configurations
server.use(cors());
server.use(express.json({ extended: false }))

// Handling requests

server.use("/api", require("./routes").saveUserRoute);

server.listen(3000, () => console.log("Server runnin'"));
