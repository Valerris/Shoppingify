import Button from "components/Button";

export default function GoBack(props) {
	const { name, onClick } = props;

	// < UI >
	const UI = (
		<Button
			variant="text"
			color="primary"
			size="sm"
			startIcon="keyboard_backspace"
			iconVariant="round"
			noPadding
			onClick={onClick}
		>
			{name ? name : "back"}
		</Button>
	);

	return UI;
}
