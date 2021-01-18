import types from "./actionTypes";

export default function reducer(state, action = { type: "INIT" }) {
	const { type } = action;

	switch (type) {
		case types.ADD_ITEM_VISIBLE:
			return {
				isAddItemVisible: true,
				isItemInfoVisible: false,
			};

		case types.ITEM_INFO_VISIBLE:
			return {
				isAddItemVisible: false,
				isItemInfoVisible: true,
			};

		default:
			return {
				isAddItemVisible: false,
				isItemInfoVisible: false,
			};
	}
}
