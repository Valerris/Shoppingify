import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "SHOPPING_LISTS_HISTORY";

const initialState = [];

const slice = createSlice({
	name: SLICE_NAME,
	initialState,
	reducers: {
		addShoppingList(state, action) {
			const { shoppingList } = action.payload;

			state.push(shoppingList);
		},
	},
});

export const { addShoppingList } = slice.actions;

export default slice.reducer;
