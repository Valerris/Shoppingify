import { combineReducers } from "@reduxjs/toolkit";
import itemsReducer from "features/MainList/reducer/slice";
import shoppingListReducer from "features/ShoppingList/reducer/slice";
import shoppingListHistoryReducer from "features/ShoppingListHistory/reducer/slice";

export default combineReducers({
	items: itemsReducer,
	shoppingList: shoppingListReducer,
	shoppingListHistory: shoppingListHistoryReducer,
});
