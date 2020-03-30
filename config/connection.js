// As part of MVC, this connection occurs in the "MODEL" so that we query database via the ORM.
// Set up MySQL connection. 
var mysql = require("mysql");
var connection;
// define environment
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL); 
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Skyfall007",
    database: "burgers_db"
  })
};

// Make the connection to the defined database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use to ORM.JS file
module.exports = connection;