const mysql = require("mysql");

var dbConnectionInfo = {
    host: process.env.DB_HOST,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
};

var dbConnection = mysql.createConnection(dbConnectionInfo);

dbConnection.on(
    "connect",
    function () {
        console.log("@connected to db");
    },
    "end",
    function (err) {
        console.log("@end ", err);
        throw err;
    },
    "close",
    function (err) {
        console.log("@closed ", err);
        throw err;
    }
);

module.exports = dbConnection;
