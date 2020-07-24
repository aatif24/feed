const mysql = require("mysql");

var dbConnectionInfo = {
    host: "localhost",
    user: "root",
    password: "C0ld1*5!",
    database: "feeds"
};

var dbConnection = mysql.createConnection(dbConnectionInfo);

dbConnection.on(
    "connect",
    function() {
        console.log("@connected to db");
    },
    "end",
    function(err) {
        console.log("@end ", err);
        throw err;
    },
    "close",
    function(err) {
        console.log("@closed ", err);
        throw err;
    }
);

module.exports = dbConnection;
