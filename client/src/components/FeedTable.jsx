import React from "react";
import moment from "moment";
import "../css/feed.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const App = ({ data }) => {
    return (
        <div className="col-12 mb-4 d-flex  feed-card-parent">
            <div className="card shadow border-0">
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr className="align-middle text-center">
                                <th>Image</th>
                                <th className="text-left">Title</th>
                                <th className="text-left">Description</th>
                                <th>Date Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length
                                ? data.map((v, i) => (
                                      <tr key={i} className="align-middle">
                                          <td width="15%">
                                              <LazyLoadImage
                                                  alt={v.title}
                                                  effect="blur"
                                                  className="shadow feed-img w-100"
                                                  src={v.image}
                                              />
                                          </td>
                                          <td width="25%">
                                              <p className="h6 font-weight-bold">{v.title}</p>
                                          </td>
                                          <td>
                                              <p className="mb-5 mt-3 font-weight-light">
                                                  {v.description}
                                              </p>
                                          </td>
                                          <td width="25%">
                                              <p className="mb-5 mt-3 font-weight-light">
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
