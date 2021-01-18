import { LabelS } from "./styled";

export default function Label(props) {
	const { outline, children, onClick } = props;

	const UI = <LabelS onClick={onClick}>{children}</LabelS>;

	return UI;
}

Label.defaultProps = {
	outline: false,
	onClick: () => {},
};
