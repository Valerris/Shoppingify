import { AsideS } from "./styled";

export default function Aside(props) {
	const { children } = props;

	const UI = <AsideS>{children}</AsideS>;

	return UI;
}
