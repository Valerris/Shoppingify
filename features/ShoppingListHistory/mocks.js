import { v4 as uuid } from "uuid";

export const HISTORY_LIST_ITEMS = [
	{
		dateCategory: { _id: uuid(), name: "August 2020" },
		list: [
			{
				_id: uuid(),
				name: "Grocery List",
				date: "Mon 27.8.2020",
				status: "completed",
			},
			{
				_id: uuid(),
				name: "Eero’s farewell party",
				date: "Mon 24.8.2020",
				status: "completed",
			},
		],
	},
	{
		dateCategory: { _id: uuid(), name: "July 2020" },
		list: [
			{
				_id: uuid(),
				name: "Board game week 2",
				date: "Mon 27.7.2020",
				status: "completed",
			},
			{
				_id: uuid(),
				name: "Grocery List",
				date: "Mon 16.7.2020",
				status: "cancelled",
			},
		],
	},
];
