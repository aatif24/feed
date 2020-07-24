import React from 'react'
import moment from "moment";
import "../css/feed.css"
const App = ({data})=> { 
return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 d-flex rounded feed-card-parent">
        <div className="card shadow border-0">
            <div className="card-body">
                <div className="d-flex align-items-center justify-content-center p-1 mb-3">
                    <img
                        width="100%"
                        className="shadow feed-img"
                        src={data.image + "?" + data.id}
                        alt={data.title}
                        srcSet=""
                    ></img>
                </div>
                {/* <hr className="border border-dark m-0 p-0" /> */}
                <div className="mt-3">
                    <p className="h5 ">{data.title}</p>
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
}

export default App;