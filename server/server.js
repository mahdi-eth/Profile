// requirements
const express = require("express");
const server = express();
const cors = require('cors');

// configurations
server.use(cors());
server.use(express.json({ extended: false }))

server.post("/api/save-user", () => console.log("OK"));

server.get("/api/save-user", (req,res) => res.json({test: "test"}))

server.listen(3000, () => console.log("Server runnin'"));
