import useWindowEvent from "./useWindowEvent";

export default function useWindowClick(cb) {
	useWindowEvent("click", cb);

	return null;
}
