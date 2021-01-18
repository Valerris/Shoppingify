import { useContext } from "react";
import FormContext from "components/FormContext";
import { FormLabelS } from "./styled";

export default function FormLabel(props) {
	const { htmlFor, error, children } = props;

	const { controlId, isFocused, isHovered } = useContext(FormContext);

	const UI = (
		<FormLabelS
			htmlFor={htmlFor || controlId}
			isFocused={isFocused}
			isHovered={isHovered}
			error={error}
		>
			{children}
		</FormLabelS>
	);

	return UI;
}

FormLabel.defaultProps = {
	htmlFor: "",
	inputId: "",
	error: false,
};
