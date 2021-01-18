import { createSelector } from "@reduxjs/toolkit";
import { itemsSelector } from "redux/selectors";

const itemsNamesSelector = createSelector(itemsSelector, (items) =>
	items.map((val) => ({ id: val.id, name: val.name }))
);

export default itemsNamesSelector;
