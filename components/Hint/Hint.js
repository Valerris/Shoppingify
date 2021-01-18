import { HintS } from "./styled";

export default function Hint(props) {
	const { error, children } = props;

	const UI = <HintS error={error}>{children}</HintS>;

	return UI;
}

Hint.defaultProps = {
	error: false,
};
