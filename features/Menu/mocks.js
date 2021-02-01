import { v4 as uuid } from "uuid";

export const MENU_ITEMS = [
	{
		_id: uuid(),
		href: "/",
		icon: "toc",
		tooltip: "items",
		active: false,
	},
	{
		_id: uuid(),
		href: "/history",
		icon: "refresh",
		tooltip: "history",
		active: false,
	},
	{
		_id: uuid(),
		href: "/#",
		icon: "insert_chart_outlined",
		tooltip: "statistics",
		active: false,
	},
	{
		_id: uuid(),
		href: "/#",
		icon: "power_settings_new",
		tooltip: "logout",
		active: false,
	},
];
