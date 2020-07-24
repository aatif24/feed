var con = require("../config/db");
var { getFeeds, getFeedsCount } = require("../models/feed");
module.exports = {
    getAllFeeds: async (req, res) => {
        let { limit = 12, page = 1, s = "", order = "title", sortOder = "asc" } = req.query;
        let filter = [];
        try {
            let data = await getFeeds(con, s, filter, limit, page, order, sortOder);
            let count = await getFeedsCount(con, s, filter);
            res.status(200).json({
                status: 1,
                msg: "feeds",
                data: {
                    data: data,
                    count: count,
                },
            });
        } catch (error) {
            res.status(500).json({
                status: 0,
                msg: "error occurred while fetching feeds",
                err: error,
            });
        }
    },
};
