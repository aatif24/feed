import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import feedsReducer from "../features/feeds/feedsSlice";

export default configureStore({
    reducer: {
        feeds: feedsReducer,
        counter: counterReducer,
    },
});
