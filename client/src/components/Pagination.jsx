import React from "react";
import Pagination from "react-js-pagination";
import "../css/paginaation.css";

import { useSelector, useDispatch } from "react-redux";
import { paginate } from "../features/feeds/feedSlice";

const App = () => {
    const dispatch = useDispatch();

    let { s, page, order, pageCount } = useSelector((state) => state.feed);

    return (
        <div>
            <Pagination
                innerClass="pagination justify-content-end"
                itemClass="page-item border-0"
                linkClass="page-link border-0 mx-2"
                activePage={page}
                activeClass="active"
                itemsCountPerPage={12}
                totalItemsCount={pageCount}
                pageRangeDisplayed={5}
                prevPageText="Previous"
                nextPageText="Next"
                // pageRangeDisplayed={2}
                onChange={(e) => {
                    dispatch(paginate(e, s, order));
                }}
            />
        </div>
    );
};

export default App;
