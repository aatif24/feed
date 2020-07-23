import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import feedsReducer from "../features/feeds/feedSlice";

export default configureStore({
    reducer: {
        feed: feedsReducer,
        counter: counterReducer,
    },
});
