var express = require("express");
const config = require('./config');
const Database = require("./database")
const database = Database.getInstance();

var server = express();

server.set("port", process.env.port || config.server_settings.port);

server.get('/', (req, res) => {
    res.send("Hat funkioniert");
});

server.listen(server.get("port"), () => {
    console.log("Server is listening on port " + server.get("port") + "!");
  });
  