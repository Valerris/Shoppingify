import React from "react";
import { InputBaseS } from "./styled";
import { chooseType, withIcon } from "./utils";

function InputBase(props, ref) {
	const {
		id,
		className,
		placeholder,
		type,
		name,
		autofocus,
		defaultValue,
		value,
		error,
		size,
		variant,
		color,
		disabled,
		fullWidth,
		rows,
		startIcon,
		endIcon,

		onClick,
		onChange,
		onFocus,
		onBlur,
		onMouseEnter,
		onMouseLeave,
	} = props;

	// < UI >
	const ComponentType = chooseType(type);

	const Component = (
		<ComponentType
			ref={ref}
			id={id}
			className={className}
			placeholder={placeholder}
			type={type}
			name={name}
			autoFocus={autofocus}
			error={error}
			size={size}
			variant={variant}
			color={color}
			disabled={disabled}
			fullWidth={fullWidth}
			startIcon={startIcon}
			endIcon={endIcon}
			rows={rows}
			value={value}
			defaultValue={defaultValue}
			onClick={(e) => {
				onClick && onClick(e);
			}}
			onTouchEnd={(e) => {
				onClick && onClick(e);
			}}
			onChange={onChange}
			onFocus={(e) => {
				onFocus && onFocus(e);
			}}
			onBlur={(e) => {
				onBlur && onBlur(e);
			}}
			onMouseEnter={(e) => {
				onMouseEnter && onMouseEnter(e);
			}}
			onMouseLeave={(e) => {
				onMouseLeave && onMouseLeave(e);
			}}
		/>
	);

	const UI =
		startIcon || endIcon
			? withIcon(Component, {
					iconName: startIcon || endIcon,
					atStart: startIcon ? true : false,
			  })
			: Component;

	return UI;
}

export default React.forwardRef(InputBase);

InputBase.defaultProps = {
	ref: undefined,
	type: "text",
	id: undefined,
	className: undefined,
	name: undefined,
	autofocus: undefined,
	defaultValue: undefined,
	value: undefined,
	label: undefined,
	hint: undefined,
	size: undefined,
	variant: undefined,
	color: undefined,
	fullWidth: undefined,
	rows: undefined,

	error: false,
	disabled: false,
	multiline: false,

	onClick: undefined,
	onChange: undefined,
	onFocus: undefined,
	onBlur: undefined,
	onMouseEnter: undefined,
	onMouseLeave: undefined,
};
