import { useEffect } from "react";

export default function useWindowEvent(eventName, cb) {
	useEffect(() => {
		window.addEventListener(eventName, cb);

		return () => window.removeEventListener(eventName, cb);
	}, [eventName, cb]);

	return null;
}
