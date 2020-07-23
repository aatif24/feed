import { createSlice } from "@reduxjs/toolkit";

let data = require("../../data.json");
export const feedSlice = createSlice({
    name: "feed",
    initialState: {
        feeds: data,
        page: 1,
        limit: 10,
        loading: false,
    },
    reducers: {
        list: (state, action) => {
            state.feeds = action.payload;
        },
        page: (state, action) => {
            state.page = action.payload;
        },
        limit: (state, action) => {
            state.limit = action.payload;
        },
        loading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { list, page, limit, loading } = feedSlice.actions;

export const search = (q) => (dispatch) => {
    console.log(q);
    /**
     *
     * api request with query parameter which returns array of feeds depending upon search query
     * if query is blank, return list with default page & limit
     */
    dispatch(loading(true));

    setTimeout(() => {
        dispatch(list(data));
        dispatch(loading(false));
    }, 1000);
};

export const paginate = (page, limit) => (dispatch) => {
    /**
     *
     * pagination
     */
    // dispatch(page(page));
    // dispatch(limit(limit));
};

export default feedSlice.reducer;
