import Button from "components/Button";
import { GoBackWrapperS } from "./styled";

export default function GoBack(props) {
	const { name, onClick } = props;

	// < UI >
	const UI = (
		<GoBackWrapperS>
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
		</GoBackWrapperS>
	);

	return UI;
}
