import { DateLabelContainerS, DateLabelS } from "./styled";

export default function DateLabel(props) {
	const { children = "01.01.1970" } = props;

	// < UI >
	const UI = (
		<DateLabelContainerS>
			<span className="material-icons-round icon">event_note</span>
			<DateLabelS>{children}</DateLabelS>
		</DateLabelContainerS>
	);

	return UI;
}
