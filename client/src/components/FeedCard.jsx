import React from "react";
import moment from "moment";
import "../css/feed.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const App = ({ data }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex  feed-card-parent">
            <div className="card shadow border-0">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-center p-1 mb-3">
                        <LazyLoadImage
                            alt={data.title}
                            effect="blur"
                            className="shadow feed-img w-100"
                            src={data.image}
                        />
                    </div>

                    <div className="mt-4">
                        <p className="h5 font-weight-bold">{data.title}</p>
                        <p className="mb-5 mt-3 font-weight-light">{data.description}</p>
                        <small
                            className="text-right position-absolute text-muted font-italic"
                            style={{ bottom: "0.5rem", right: "1.5rem" }}
                        >
                            {moment(data.updated_on).format("LLLL")}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
