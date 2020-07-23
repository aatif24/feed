import React from "react";
import Nav from "./Nav";
// import Footer from "./Footer";

const App = ({ children }) => {
    return (
        <div className="container">
            <Nav />
            {children}
        </div>
    );
};

export default App;
