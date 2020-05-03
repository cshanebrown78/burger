// MySQL connection setup.
var mysql = require("mysql");

var connection = mysql.createConnection ({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "A!rplane1",
    database: "burgers_db"
});

// Makes the connection
connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId)
});

// Exports connection for ORM to use
module.exports = connection;