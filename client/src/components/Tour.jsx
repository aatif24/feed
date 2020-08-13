import React, { useState, useEffect } from "react";
import Tour from "reactour";
import Cookies from "js-cookie";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const App = () => {
    const [isTourOpen, setIsTourOpen] = useState(false);

    useEffect(() => {
        if (!Cookies.get("tour")) {
            setTimeout(() => {
                document.getElementById("root").scrollIntoView();

                setIsTourOpen(true);
            }, 3000);
        }
    }, []);

    const disableBody = (target) => disableBodyScroll(target);
    const enableBody = (target) => enableBodyScroll(target);
    const steps = [
        {
            selector: ".__search",
            content: "Search what you need!",
        },
        {
            selector: ".__sort",
            content: "Sort by title or date updated by selecting options from this dropdown!",
        },
        {
            selector: ".__sortAction",
            content: "Click here to change order ascending or descending!",
        },
        {
            selector: ".__showCard",
            content: "Click to hide and show this feeds section!",
        },
        {
            selector: ".__showTable",
            content: "Click to hide and show this feeds section!",
        },
        {
            selector: ".__tableTitleSort",
            content: "Click to sort feeds ascending/descending by title!",
        },
        {
            selector: ".__tableUpdatedOnSort",
            content: "Click to sort feeds ascending/descending by date updated!",
        },
        {
            selector: ".__pagination",
            content: "Paginate through various pages of our beautiful feeds! Enjoy",
        },
    ];

    return (
        <>
            <Tour
                className="card"
                steps={steps}
                isOpen={isTourOpen}
                onAfterOpen={disableBody}
                onBeforeClose={enableBody}
                showNavigationNumber={false}
                onRequestClose={(e) => {
                    Cookies.set("tour", true);
                    document.getElementById("root").scrollIntoView();
                    setIsTourOpen(false);
                }}
            />
        </>
    );
};

export default App;
