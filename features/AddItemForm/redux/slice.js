import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "ADD_ITEM";

const initialState = {};

const slice = createSlice({
	name: SLICE_NAME,
	initialState,
});

export default slice.reducer;
