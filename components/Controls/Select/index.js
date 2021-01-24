import React, { useCallback, useState } from "react";
import { SelectContainerS, OptionsContainerS } from "./styled";
import Input from "components/Controls/Input";
import { createOptions } from "./utils";

const Select = (props, ref) => {
	const {
		options = [],
		onClick,
		onBlur,
		onChange,
		...restProps
	} = props;

	// < hooks >
	const [value, setValue] = useState("");
	const [query, setQuery] = useState("");
	const [isFocused, setIsFocused] = useState(false);
	// </ hooks >

	// < handlers >
	const inputClickHandler = useCallback(() => {
		setValue("");

		setIsFocused(true);

		onClick && onClick();
	}, []);

	const inputBlurHandler = useCallback(() => {
		setIsFocused(false);

		onBlur && onBlur();
	}, []);

	const inputChangeHandler = useCallback(({ target: { value } }) => {
		setValue("");
		setQuery(value);
		setIsFocused(true);

		onChange && onChange();
	}, []);

	const optionsMouseDownHandler = useCallback((e) => {
		e.preventDefault();
	}, []);

	const optionsClickHandler = useCallback((e) => {
		const { target } = e;

		if (target.tagName !== "LI") return;

		const { value } = target.dataset;

		setQuery("");
		setValue(value);
		setIsFocused(false);
	}, []);
	// </ handlers >

	// < UI >
	const optionsUI = createOptions(options, query);

	const UI = (
		<SelectContainerS>
			<Input
				ref={ref}
				value={query || value}
				onChange={inputChangeHandler}
				onClick={inputClickHandler}
				onBlur={inputBlurHandler}
				{...restProps}
			/>
			{isFocused && (
				<OptionsContainerS
					onClick={optionsClickHandler}
					onMouseDown={optionsMouseDownHandler}
				>
					{optionsUI}
				</OptionsContainerS>
			)}
		</SelectContainerS>
	);

	return UI;
};

export default React.forwardRef(Select);
