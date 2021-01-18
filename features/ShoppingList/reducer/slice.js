import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import {
	findCategoryIdx,
	findCategoryObj,
	findItemById,
} from "redux/utils";

const SLICE_NAME = "SHOPPING_LIST";

const initialState = [
	// {
	// 	category: {
	// 		_id: uuid(),
	// 		name: "Fruit and vegetables",
	// 	},
	// 	items: [
	// 		{ _id: uuid(), name: "Avocado", count: 3 },
	// 		{ _id: uuid(), name: "Pre-cooked corn 450g", count: 3 },
	// 	],
	// },
	// {
	// 	category: {
	// 		_id: uuid(),
	// 		name: "Meat & Fish",
	// 	},
	// 	items: [
	// 		{ _id: uuid(), name: "Avocado", count: 3 },
	// 		{ _id: uuid(), name: "Pre-cooked corn 450g", count: 3 },
	// 	],
	// },
];

const slice = createSlice({
	name: SLICE_NAME,
	initialState,
	reducers: {
		incCount(state, action) {
			const { id, category } = action.payload;

			const categoryObj = findCategoryObj(state, category);

			const itemObj = findItemById(categoryObj.items, id);

			itemObj.count++;
		},
		decCount(state, action) {
			const { id, category } = action.payload;

			const categoryObj = findCategoryObj(state, category);

			const itemObj = findItemById(categoryObj.items, id);

			if (itemObj.count > 0) {
				itemObj.count--;
			}
		},
		addItem(state, action) {
			const { category, item } = action.payload;

			const categoryObj = findCategoryObj(state, category.name);

			if (categoryObj) {
				categoryObj.items.push(item);
			} else {
				state.push({ category, items: [item] });
			}
		},
		removeItem(state, action) {
			const { id, category } = action.payload;

			const categoryIdx = findCategoryIdx(state, category);

			state[categoryIdx].items = state[categoryIdx].items.filter(
				(el) => el._id !== id
			);

			if (state[categoryIdx].items.length === 0) {
				state.splice(categoryIdx, 1);
			}
		},
	},
});

export const {
	incCount,
	decCount,
	addItem,
	removeItem,
} = slice.actions;

export default slice.reducer;
