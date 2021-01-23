import React, { useState, useCallback } from "react";
import FormContext from "Context/FormContext";
import { FormGroupS } from "./styled";

export const FormGroupHandlerContext = React.createContext(null);

export default function FormGroup(props) {
	const { controlId, noMargin, children } = props;

	const [ctxState, setCtx] = useState({
		controlId,
		isHovered: false,
		isFocused: false,
	});

	const ctxHandler = useCallback((ctxCb) => setCtx(ctxCb), []);

	const UI = (
		<FormGroupS noMargin={noMargin}>
			<FormGroupHandlerContext.Provider value={ctxHandler}>
				<FormContext.Provider value={ctxState}>
					{children}
				</FormContext.Provider>
			</FormGroupHandlerContext.Provider>
		</FormGroupS>
	);

	return UI;
}

FormGroup.defaultProps = { controlId: undefined, noMargin: false };
