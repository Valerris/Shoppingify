import { SectionHeaderS } from "./styled";

export default function SectionH(props) {
	const { children } = props;

	// < UI >
	const UI = <SectionHeaderS>{children}</SectionHeaderS>;

	return UI;
}
