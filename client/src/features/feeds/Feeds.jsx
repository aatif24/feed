import React from "react";
import moment from "moment";
import Loader from "../../components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { search, paginate } from "./feedSlice.js";
const App = () => {
    let { feeds, loading } = useSelector((state) => state.feed);

    const dispatch = useDispatch();

    const Feed = ({ data }) => {
        return (
            <div className="col-lg-4 col-md-6 col-sm-1 mb-3 d-flex rounded">
                <div className="card shadow border-0">
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-center p-1 mb-3">
                            <img
                                width="100%"
                                src={data.image + "?" + data.id}
                                alt={data.title}
                                srcSet=""
                            ></img>
                        </div>
                        <hr className="border border-dark m-0 p-0" />
                        <div className="mt-3">
                            <p className="h5 ">{data.name}</p>
                            <p className="mb-5 mt-3 font-weight-light">{data.description}</p>
                            <small
                                className="text-right position-absolute text-muted font-italic"
                                style={{ bottom: "0.5rem", right: "1.5rem" }}
                            >
                                {moment(data.dateLastEdited).format("LLLL")}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {loading ? <Loader /> : null}
            <div className="container-fluid my-3 px-0">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="search"
                                onChange={(e) => dispatch(search(e.target.value))}
                            />
                            <span className="input-group-text bg-white" id="search">
                                <i className="fab fa-searchengin fa-lg"></i>
                            </span>
                        </div>
                    </div>
                    <div className="d-none d-lg-block d-md-block col-lg-3 col-md-3"></div>
                    <div className="col-lg-3 col-md-3 text-right">
                        <div className="input-group mb-3 ">
                            <select className="form-select" id="sort">
                                <option value="name">Title</option>
                                <option value="dateLastEdited">Date Modified</option>
                            </select>
                            <label className="input-group-text" htmlFor="sort">
                                Sort By
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
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end">
                            <li className="page-item disabled">
                                <a
                                    className="page-link border-0"
                                    href="#"
                                    tabIndex="-1"
                                    aria-disabled="true"
                                >
                                    Previous
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link border-0" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link border-0" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link border-0" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link border-0" href="#">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default App;
