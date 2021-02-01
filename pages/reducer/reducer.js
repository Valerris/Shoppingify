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

		case types.HISTORY_LIST_VISIBLE:
			return {
				isHistoryListVisible: true,
				isHistoryItemInfoVisible: false,
			};

		case types.HISTORY_ITEM_INFO_VISIBLE:
			return {
				isHistoryListVisible: false,
				isHistoryItemInfoVisible: true,
			};

		default:
			return {
				isAddItemVisible: false,
				isItemInfoVisible: false,
			};
	}
}
