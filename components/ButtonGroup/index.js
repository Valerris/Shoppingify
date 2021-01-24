import { ButtonContainerS } from "./styled";

export default function ButtonGroup(props) {
	const { children } = props;

	const UI = (
		<ButtonContainerS>
			<div>{children}</div>
		</ButtonContainerS>
	);

	return UI;
}
