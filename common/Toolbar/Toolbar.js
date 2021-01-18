import { ToolbarS } from "./styled";

export default function Toolbar(props) {
	const { children } = props;

	const UI = <ToolbarS>{children}</ToolbarS>;

	return UI;
}
