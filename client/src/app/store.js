import { configureStore } from "@reduxjs/toolkit";

import feedsReducer from "../features/feeds/feedSlice";

export default configureStore({
    reducer: {
        feed: feedsReducer,
    },
});
