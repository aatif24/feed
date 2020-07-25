import React, { useEffect, useState } from "react";

import Loader from "../../components/Loader";
import Feed from "../../components/FeedCard";
import FeedTable from "../../components/FeedTable";
import Pagination from "../../components/Pagination";

import { useSelector, useDispatch } from "react-redux";
import { search, sort } from "./feedSlice.js";

import "../../css/feed.css";

const App = () => {
    const dispatch = useDispatch();

    let { feeds, loading, s, order, sortOrder, page } = useSelector((state) => state.feed);
    const [showCard, setShowCard] = useState(true);
    const [showTable, setShowTable] = useState(true);
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
                            <span className="input-group-text bg-blue" id="search">
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

                            <button
                                className="input-group-text btn btn-sm py-0 px-2 bg-blue"
                                htmlFor="sort"
                                onClick={(e) =>
                                    dispatch(sort(order, sortOrder === "asc" ? "desc" : "asc", s))
                                }
                            >
                                {sortOrder === "asc" ? (
                                    <i className="fas fa-arrow-up"></i>
                                ) : (
                                    <i className="fas fa-arrow-down"></i>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <h5>
                    Card View{" "}
                    <button className="btn" onClick={(e) => setShowCard(!showCard)}>
                        {showCard ? <i class="far fa-eye"></i> : <i class="far fa-eye-slash"></i>}
                    </button>
                </h5>
                {showCard && (
                    <div className="row my-3">
                        {feeds && feeds.length
                            ? feeds.map((v, i) => {
                                  return <Feed data={v} key={i} />;
                              })
                            : null}
                    </div>
                )}

                <h5>
                    Table View{" "}
                    <button className="btn" onClick={(e) => setShowTable(!showTable)}>
                        {showTable ? <i class="far fa-eye"></i> : <i class="far fa-eye-slash"></i>}
                    </button>
                </h5>
                {showTable && (
                    <div className="row my-3">
                        <FeedTable data={feeds} />;
                    </div>
                )}

                <div className="row">
                    <Pagination />
                </div>
            </div>
        </>
    );
};

export default App;
