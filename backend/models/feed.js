const TABLE_FEED = "feed";

module.exports = {
    getFeeds: (
        con,
        search = "",
        filter,
        limit = 12,
        page = 1,
        orderBy = "title",
        sortOrder = "desc"
    ) => {
        return new Promise((resolve, reject) => {
            let q = `SELECT * FROM ${TABLE_FEED} WHERE 1=1 `;
            if (filter.length) {
                for (let i = 0; i < filter.length; i++) {
                    let f = filter[i];
                    q += ` ${f.condition} ${f.name} ${f.operator} ${f.value}`;
                }
            }

            if (search !== "") {
                if (!(search.indexOf('"') >= 0 || search.indexOf("'") >= 0)) {
                    search += "*";
                }
                q += ` AND  MATCH (title,description) AGAINST ('(${search})' IN BOOLEAN MODE)`;
            }
            q += ` ORDER BY ${orderBy} ${sortOrder}`;
            let offset = page > 1 ? (page - 1) * limit : 0;
            q += ` LIMIT ${offset},${limit}`;

            con.query(q, (err, data) => {
                console.log(q);
                err ? reject(err) : resolve(data);
            });
        });
    },
    getFeedsCount: (con, search = "", filter) => {
        return new Promise((resolve, reject) => {
            let q = `SELECT count(id) as count FROM ${TABLE_FEED} WHERE 1=1 `;
            if (filter.length) {
                for (let i = 0; i < filter.length; i++) {
                    let f = filter[i];
                    q += ` ${f.condition} ${f.name} ${f.operator} ${f.value}`;
                }
            }
             if (search !== "") {
                if (!(search.indexOf('"') >= 0 || search.indexOf("'") >= 0)) {
                    search += "*";
                }
                q += ` AND  MATCH (title,description) AGAINST ('(${search})' IN BOOLEAN MODE)`;
            }
            con.query(q, (err, data) => {
                err ? reject(err) : resolve(data[0]["count"]);
            });
        });
    },
};
