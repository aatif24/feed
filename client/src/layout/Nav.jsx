import React from "react";

import { NavLink } from "react-router-dom";
const App = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white ">
            <div className="container-fluid px-0">
                <a
                    className="navbar-brand text-muted font-weight-bold active"
                    href="/"
                    aria-current="page"
                >
                    <i className="fas fa-font fa-2x"></i>
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
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                target="_blank"
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
