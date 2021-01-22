import React from "react";

const FormContext = React.createContext({
	controlId: undefined,
	error: undefined,
	isFocused: false,
	isHovered: false,
});

export default FormContext;
