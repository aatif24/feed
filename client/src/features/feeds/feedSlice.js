import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const feedSlice = createSlice({
    name: "feed",
    initialState: {
        feeds: [],
        s: "",
        page: 1,
        limit: 10,
        loading: false,
        pageCount: 0,
        order: "title",
        sortOrder: "asc",
    },
    reducers: {
        list: (state, action) => {
            state.feeds = action.payload;
        },
        page: (state, action) => {
            state.page = action.payload;
        },
        pageCount: (state, action) => {
            state.pageCount = action.payload;
        },
        limit: (state, action) => {
            state.limit = action.payload;
        },
        loading: (state, action) => {
            state.loading = action.payload;
        },
        s: (state, action) => {
            state.s = action.payload;
        },
        order: (state, action) => {
            state.order = action.payload;
        },
        sortOrder: (state, action) => {
            state.sortOrder = action.payload;
        },
    },
});

export const { list, page, limit, loading, s, order, pageCount, sortOrder } = feedSlice.actions;

export const search = (str, orderBy) => (dispatch) => {
    dispatch(loading(true));
    axios
        .get("http://localhost:4000", {
            params: { s: str, order: orderBy },
        })
        .then((response) => {
            let data = response.data.data.data;
            let count = response.data.data.count;
            dispatch(s(str));
            dispatch(list(data));
            dispatch(pageCount(count));
            dispatch(page(1));
            dispatch(loading(false));
        })
        .catch((err) => {
            console.log(err);
        });
};

export const paginate = (pageNum, s, sortBy) => (dispatch) => {
    dispatch(loading(true));
    let sortOrder = sortBy === "title" ? "asc" : "desc";
    axios
        .get("http://localhost:4000", {
            params: { s: s, order: sortBy, sortOder: sortOrder, page: pageNum },
        })
        .then((response) => {
            let data = response.data.data.data;

            dispatch(list(data));
            dispatch(page(pageNum));
            dispatch(loading(false));
        })
        .catch((err) => {
            console.log(err);
        });
};

export const sort = (sortBy, orderDirection = "asc", s) => (dispatch) => {
    dispatch(loading(true));

    axios
        .get("http://localhost:4000", {
            params: { s: s, order: sortBy, sortOder: orderDirection },
        })
        .then((response) => {
            let data = response.data.data.data;
            let count = response.data.data.count;
            dispatch(order(sortBy));
            dispatch(sortOrder(orderDirection));
            dispatch(list(data));
            dispatch(page(1));
            dispatch(pageCount(count));
            dispatch(loading(false));
        })
        .catch((err) => {
            console.log(err);
        });
};

export default feedSlice.reducer;
