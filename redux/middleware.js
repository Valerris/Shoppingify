import { getDefaultMiddleware } from "@reduxjs/toolkit";

export default function middleware(getDefaultMiddleware) {
	return getDefaultMiddleware({
		serializableCheck: false,
	});
}
