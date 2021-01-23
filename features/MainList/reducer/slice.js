import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import {
	findCategoryIdx,
	findCategoryObj,
	findItemById,
} from "redux/utils";

const SLICE_NAME = "ITEMS";

const initialState = [
	{
		category: {
			_id: uuid(),
			name: "Fruit and vegetables",
		},
		items: [
			{
				_id: uuid(),
				name: "Avocado",
				note:
					"Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice.",
				imgUrl:
					"https://lifestyle.uai.com.br/wp-content/uploads/sites/9/2019/11/aabacate-950x631.jpg",
				isVisible: true,
			},
			{
				_id: uuid(),
				name: "Banana",
				note:
					"Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice.",
				imgUrl:
					"https://lifestyle.uai.com.br/wp-content/uploads/sites/9/2019/11/aabacate-950x631.jpg",
				isVisible: true,
			},
			{
				_id: uuid(),
				name: "Bunch of carrots 5pcs",
				note:
					"Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice.",
				imgUrl:
					"https://lifestyle.uai.com.br/wp-content/uploads/sites/9/2019/11/aabacate-950x631.jpg",
				isVisible: true,
			},
			{
				_id: uuid(),
				name: "Chicken 1kg",
				note:
					"Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice.",
				imgUrl:
					"https://lifestyle.uai.com.br/wp-content/uploads/sites/9/2019/11/aabacate-950x631.jpg",
				isVisible: true,
			},
			{
				_id: uuid(),
				name: "Pre-cooked corn 450g",
				note:
					"Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice.",
				imgUrl:
					"https://lifestyle.uai.com.br/wp-content/uploads/sites/9/2019/11/aabacate-950x631.jpg",
				isVisible: true,
			},
			{
				_id: uuid(),
				name: "Mandarin Nadorcott",
				note:
					"Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice.",
				imgUrl:
					"https://lifestyle.uai.com.br/wp-content/uploads/sites/9/2019/11/aabacate-950x631.jpg",
				isVisible: true,
			},
			{
				_id: uuid(),
				name: "Piele De Sapo Melon",
				note:
					"Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice.",
				imgUrl:
					"https://lifestyle.uai.com.br/wp-content/uploads/sites/9/2019/11/aabacate-950x631.jpg",
				isVisible: true,
			},
			{
				_id: uuid(),
				name: "Watermelon",
				note:
					"Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice.",
				imgUrl:
					"https://lifestyle.uai.com.br/wp-content/uploads/sites/9/2019/11/aabacate-950x631.jpg",
				isVisible: true,
			},
		],
	},
	{
		category: {
			_id: uuid(),
			name: "Meat & Fish",
		},
		items: [
			{
				_id: uuid(),
				name: "Meat",
				note:
					"Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice.",
				imgUrl:
					"https://lifestyle.uai.com.br/wp-content/uploads/sites/9/2019/11/aabacate-950x631.jpg",
				isVisible: true,
			},
			{
				_id: uuid(),
				name: "Fish",
				note:
					"Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice.",
				imgUrl:
					"https://lifestyle.uai.com.br/wp-content/uploads/sites/9/2019/11/aabacate-950x631.jpg",
				isVisible: true,
			},
		],
	},
];

const slice = createSlice({
	name: SLICE_NAME,
	initialState,
	reducers: {
		addItem(state, action) {
			const { category, ...itemParams } = action.payload;

			let categoryObj = findCategoryObj(state, category);

			if (categoryObj) {
				categoryObj.items.push({ ...itemParams, isVisible: true });
			} else {
				const newItem = {
					...itemParams,
					_id: uuid(),
					isVisible: true,
				};

				categoryObj = {
					category: {
						name: category,
						_id: uuid(),
					},
					items: [newItem],
				};

				return [...state, { ...categoryObj }];
			}

			return;
		},
		removeItem(state, action) {
			const { id, category } = action.payload;

			const categoryObjIdx = findCategoryIdx(state, category);

			if (!state[categoryObjIdx]) return;

			state[categoryObjIdx].items = state[
				categoryObjIdx
			].items.filter((el) => el._id !== id);

			if (state[categoryObjIdx].items.length === 0) {
				state.splice(categoryObjIdx, 1);
			}
		},
		toggleVisibility(state, action) {
			const { id, category } = action.payload;

			const categoryObj = findCategoryObj(state, category);

			const itemObj = findItemById(categoryObj.items, id);

			itemObj.isVisible = !itemObj.isVisible;
		},
	},
});

export const {
	addItem,
	removeItem,
	toggleVisibility,
} = slice.actions;

export default slice.reducer;
