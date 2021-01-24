import { LabelS } from "./styled";

export default function Label(props) {
	const { children, onClick } = props;

	const UI = <LabelS onClick={onClick}>{children}</LabelS>;

	return UI;
}
