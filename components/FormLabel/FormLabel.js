import { useContext } from "react";
import FormContext from "Context/FormContext";
import { FormLabelS } from "./styled";

export default function FormLabel(props) {
	const { htmlFor, error, children } = props;

	const { controlId, isFocused, isHovered } = useContext(FormContext);

	const UI = (
		<FormLabelS
			htmlFor={controlId || htmlFor}
			isHovered={isHovered}
			isFocused={isFocused}
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
