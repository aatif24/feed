var mysql = require("mysql");
const data = JSON.parse(JSON.stringify(require("../client/src/mock_data.json")));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "C0ld1*5!",
    database: "feeds",
});

try {
    con.connect();
} catch (error) {
    throw error;
}

const start = async () => {
    if (con) {
        if (data.length) {
            for (let i = 0; i < data.length; i++) {
                let f = data[i];
                f = {
                    title: f["name"],
                    description: f["description"],
                    image: f["image"],
                    updated_on: new Date(f["dateLastEdited"]),
                };
                try {
                    await addFeed(con, f);
                } catch (error) {
                    console.warn(error);
                }
            }
        }
        con.end();
    }
};

var addFeed = (con, feed) => {
    return new Promise((resolve, reject) => {
        con.query("INSERT INTO feed set ? ", [feed], (err, status) => {
            err ? reject(err) : resolve(status);
        });
    });
};

start();
