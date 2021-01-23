import React, { useCallback, useContext } from "react";
import FormLabel from "components/FormLabel";
import Hint from "components/Hint";
import InputBase from "components/Controls/InputBase";
import FormContext from "Context/FormContext";
import { FormGroupHandlerContext } from "components/FormGroup/FormGroup";

function Input(props, ref) {
	const {
		label,
		hint,
		id,
		autofocus,

		onMouseEnter,
		onMouseLeave,
		onFocus,
		onBlur,

		...restProps
	} = props;

	// < hooks >
	const { controlId } = useContext(FormContext);
	const ctxHandler = useContext(FormGroupHandlerContext);
	// </ hooks >

	// < handlers >
	const mouseEnterHandler = useCallback(() => {
		onMouseEnter && onMouseEnter();
		ctxHandler && ctxHandler((ctx) => ({ ...ctx, isHovered: true }));
	}, []);

	const mouseLeaveHandler = useCallback(() => {
		onMouseLeave && onMouseLeave();
		ctxHandler && ctxHandler((ctx) => ({ ...ctx, isHovered: false }));
	}, []);

	const focusHandler = useCallback(() => {
		onFocus && onFocus();
		ctxHandler && ctxHandler((ctx) => ({ ...ctx, isFocused: true }));
	}, []);

	const blurHandler = useCallback(() => {
		onBlur && onBlur();
		ctxHandler && ctxHandler((ctx) => ({ ...ctx, isFocused: false }));
	}, []);
	// </ handlers >

	// < UI >
	const mainId = controlId || id;

	const UI = (
		<>
			{label && <FormLabel htmlFor={mainId}>{label}</FormLabel>}

			<InputBase
				ref={ref}
				id={mainId}
				autofocus={autofocus}
				onMouseEnter={mouseEnterHandler}
				onMouseLeave={mouseLeaveHandler}
				onFocus={focusHandler}
				onBlur={blurHandler}
				{...restProps}
			/>

			{hint && <Hint>{hint}</Hint>}
		</>
	);

	return UI;
}

export default React.forwardRef(Input);

Input.defaulProps = {
	label: undefined,
	hint: undefined,
	id: undefined,
	autofocus: undefined,

	onMouseEnter: undefined,
	onMouseLeave: undefined,
	onFocus: undefined,
	onBlur: undefined,
};
