import React, { useState, useCallback } from "react";
import FormContext from "components/FormContext";
import { FormGroupS } from "./styled";

export const FormGroupHandlerContext = React.createContext(null);

export default function FormGroup(props) {
	const { controlId, noMargin, children } = props;

	const [ctxState, setCtx] = useState({
		controlId,
		isFocused: false,
		isHovered: false,
	});

	const setCtxHandler = useCallback((value) => setCtx(value), []);

	const UI = (
		<FormContext.Provider value={ctxState}>
			<FormGroupHandlerContext.Provider value={setCtxHandler}>
				<FormGroupS noMargin={noMargin}>{children}</FormGroupS>
			</FormGroupHandlerContext.Provider>
		</FormContext.Provider>
	);

	return UI;
}

FormGroup.defaultProps = { controlId: undefined, noMargin: false };
