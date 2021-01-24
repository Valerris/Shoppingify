import { HintS } from "./styled";

export default function Hint(props) {
	const { error = false, children } = props;

	const UI = <HintS error={error}>{children}</HintS>;

	return UI;
}
