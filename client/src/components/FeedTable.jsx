import React from "react";
import moment from "moment";
import "../css/feed.css";
import Cookies from "js-cookie";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector, useDispatch } from "react-redux";
import { sort } from "../features/feeds/feedSlice";

const App = ({ data }) => {
    const dispatch = useDispatch();
    let { s, order, sortOrder } = useSelector((state) => state.feed);

    return (
        <div className="col-12 mb-4 d-flex  feed-card-parent">
            <div className="card shadow border-0">
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr className="align-middle">
                                <th>Image</th>
                                <th
                                    className="pointer-hand __tableTitleSort"
                                    onClick={(e) =>
                                        dispatch(
                                            sort("title", sortOrder === "asc" ? "desc" : "asc", s)
                                        )
                                    }
                                >
                                    Title{" "}
                                    {order === "title" &&
                                        (sortOrder === "asc" ? (
                                            <i className="fas fa-sort-up"></i>
                                        ) : (
                                            <i className="fas fa-sort-down"></i>
                                        ))}
                                </th>
                                <th className="text-left">Description</th>
                                <th
                                    className=" pointer-hand __tableUpdatedOnSort"
                                    onClick={(e) =>
                                        dispatch(
                                            sort(
                                                "updated_on",
                                                sortOrder === "asc" ? "desc" : "asc",
                                                s
                                            )
                                        )
                                    }
                                >
                                    Date Updated{" "}
                                    {order === "updated_on" &&
                                        (sortOrder === "asc" ? (
                                            <i className="fas fa-sort-up"></i>
                                        ) : (
                                            <i className="fas fa-sort-down"></i>
                                        ))}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length
                                ? data.map((v, i) => (
                                      <tr key={i} className="align-middle">
                                          <td width="15%">
                                              {Cookies.get("tour") ? (
                                                  <LazyLoadImage
                                                      alt={v.title}
                                                      effect="blur"
                                                      className=" my-4 feed-img w-75"
                                                      src={v.image}
                                                  />
                                              ) : (
                                                  <img
                                                      src={v.image}
                                                      className=" my-4 feed-img w-75"
                                                      alt={v.title}
                                                  />
                                              )}
                                          </td>
                                          <td width="25%">
                                              <p className="h6 font-weight-bold p-0 m-0">
                                                  {v.title}
                                              </p>
                                          </td>
                                          <td>
                                              <p className="p-0 m-0">{v.description}</p>
                                          </td>
                                          <td width="25%">
                                              <p className="p-0 m-0">
                                                  {moment(v.updated_on).format("LLLL")}
                                              </p>
                                          </td>
                                      </tr>
                                  ))
                                : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default App;
