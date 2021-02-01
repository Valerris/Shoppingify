import { createSlice } from "@reduxjs/toolkit";
import Moment from "moment";
import { v4 as uuid } from "uuid";
import { findCategoryObj } from "redux/utils";

const SLICE_NAME = "SHOPPING_LISTS_HISTORY";

const initialState = [];

const slice = createSlice({
	name: SLICE_NAME,
	initialState,
	reducers: {
		addShoppingList(state, action) {
			const { shoppingList } = action.payload;

			const categoryName = `${
				Moment.months()[new Date().getMonth()]
			} ${new Date().getFullYear()}`;

			const categoryObj = findCategoryObj(state, categoryName);

			const historyItem = {
				_id: uuid(),
				...shoppingList,
				status: shoppingList.status.toLowerCase(),
				date: Moment().format("ddd, DD.MM.YYYY"),
			};

			if (categoryObj) {
				categoryObj.items.push(historyItem);
			} else {
				const historyObj = {
					items: [historyItem],
					category: {
						_id: uuid(),
						name: categoryName,
					},
				};

				state.push(historyObj);
			}
		},
	},
});

export const { addShoppingList } = slice.actions;

export default slice.reducer;
