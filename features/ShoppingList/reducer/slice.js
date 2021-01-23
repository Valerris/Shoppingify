import { createSlice } from "@reduxjs/toolkit";
import {
	findCategoryIdx,
	findCategoryObj,
	findItemById,
} from "redux/utils";

const SLICE_NAME = "SHOPPING_LIST";

export const STATUSES = {
	edit: "EDIT",
	adjust: "ADJUST",
	completed: "COMPLETED",
	canceled: "CANCELED",
};

const initialState = {
	title: undefined,
	status: STATUSES.edit,
	list: [],
};

const slice = createSlice({
	name: SLICE_NAME,
	initialState,
	reducers: {
		incCount(state, action) {
			const { id, category } = action.payload;

			const list = state.list;

			const categoryObj = findCategoryObj(list, category);

			const itemObj = findItemById(categoryObj.items, id);

			itemObj.count++;
		},
		decCount(state, action) {
			const { id, category } = action.payload;

			const list = state.list;

			const categoryObj = findCategoryObj(list, category);

			const itemObj = findItemById(categoryObj.items, id);

			if (itemObj.count > 0) {
				itemObj.count--;
			}
		},
		addItem(state, action) {
			const { category, item } = action.payload;

			const list = state.list;

			const categoryObj = findCategoryObj(list, category.name);

			if (categoryObj) {
				categoryObj.items.push(item);
			} else {
				list.push({ category, items: [item] });
			}
		},
		removeItem(state, action) {
			const { id, category } = action.payload;

			const list = state.list;

			const categoryIdx = findCategoryIdx(list, category);

			list[categoryIdx].items = list[categoryIdx].items.filter(
				(el) => el._id !== id
			);

			if (list[categoryIdx].items.length === 0) {
				list.splice(categoryIdx, 1);
			}
		},
		addTitle(state, action) {
			const { title } = action.payload;

			state.title = title;
		},
		removeTitle(state, action) {
			state.title = undefined;
		},
		changeStatus(state, action) {
			const { status } = action.payload;

			state.status = status;
		},
		clear(state, action) {
			state.title = undefined;
			state.status = STATUSES.edit;
			state.list = [];
		},
	},
});

export const {
	incCount,
	decCount,
	addItem,
	removeItem,
	addTitle,
	removeTitle,
	changeStatus,
	clear,
} = slice.actions;

export default slice.reducer;
