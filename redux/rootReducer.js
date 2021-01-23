import { combineReducers } from "@reduxjs/toolkit";
import itemsReducer from "features/MainList/reducer/slice";
import shoppingListReducer from "features/ShoppingList/reducer/slice";
import shoppingListsHistoryReducer from "features/ShoppingListsHistory/reducer/slice";

export default combineReducers({
	items: itemsReducer,
	shoppingList: shoppingListReducer,
	shoppingListsHistory: shoppingListsHistoryReducer,
});
