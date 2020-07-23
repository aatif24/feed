import React from "react";
import "../css/loader.css";
const App = () => {
    return (
        <>
            <div className="spinner text-center d-flex justify-content-center">
                <div className="spinner-border text-secondary " role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </>
    );
};

export default App;
