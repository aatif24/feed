import React from "react";

import { NavLink } from "react-router-dom";
import "../css/index.css";
const App = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white ">
            <div className="container-fluid px-0">
                <a
                    className="navbar-brand text-muted font-weight-bold active"
                    href="/"
                    aria-current="page"
                >
                    <i className="fas fa-font feed  "></i>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                    <ul className="navbar-nav w-100 mb-2  mb-lg-0 d-flex justify-content-end px-0">
                        <li className="nav-item  mr-3 px-0">
                            <NavLink className="nav-link active px-0"  to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item px-0">
                            <a
                                className="nav-link px-0"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://about.me/aatifshaikh"
                            >
                                About
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default App;
