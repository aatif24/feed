import React, { useEffect } from "react";

import Loader from "../../components/Loader";
import Feed from "../../components/FeedCard";
import Pagination from "../../components/Pagination";

import { useSelector, useDispatch } from "react-redux";
import { search, sort } from "./feedSlice.js";

import "../../css/feed.css";

const App = () => {
    const dispatch = useDispatch();

    let { feeds, loading, s, order, sortOrder, page } = useSelector((state) => state.feed);

    useEffect(() => {
        dispatch(search());
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        // if (feeds.length) {
            setTimeout(() => {
                document.getElementById("root").scrollIntoView();
            }, 500);
        // }
    }, [page]);

    return (
        <>
            {loading ? <Loader /> : null}
            <div className="container-fluid my-3 px-0">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="input-group input-group-sm w-sm-100 w-xs-100 w-md-100 w-50 search-input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="search"
                                onChange={(e) => dispatch(search(e.target.value, order))}
                            />
                            <span className="input-group-text bg-white" id="search">
                                <i className="fas fa-search fa-lg"></i>
                            </span>
                        </div>
                    </div>
                    <div className="d-none d-lg-block d-md-block col-lg-3 col-md-3"></div>
                    <div className="col-lg-3 col-md-3 text-right">
                        <div className="input-group input-group-sm mb-3 ">
                            <select
                                className="form-select"
                                id="sort"
                                onChange={(e) => dispatch(sort(e.target.value, sortOrder, s))}
                            >
                                <option value="title">Title</option>
                                <option value="updated_on">Date Modified</option>
                            </select>
                            <label className="input-group-text bg-white py-0" htmlFor="sort">
                                <button
                                    className="btn btn-sm py-0"
                                    onClick={(e) =>
                                        dispatch(
                                            sort(order, sortOrder === "asc" ? "desc" : "asc", s)
                                        )
                                    }
                                >
                                    {sortOrder === "asc" ? (
                                        <i className="fas fa-arrow-up"></i>
                                    ) : (
                                        <i className="fas fa-arrow-down"></i>
                                    )}
                                </button>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row my-3">
                    {feeds && feeds.length
                        ? feeds.map((v, i) => {
                              return <Feed data={v} key={i} />;
                          })
                        : null}
                </div>
                <div className="row">
                    <Pagination />
                </div>
            </div>
        </>
    );
};

export default App;
