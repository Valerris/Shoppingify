import React from "react";
import { InputBaseS } from "./styled";
import { chooseType, withIcon } from "./utils";

function InputBase(props, ref) {
	const {
		id,
		className,
		placeholder,
		type = "text",
		name,
		autofocus,
		defaultValue,
		value,
		size,
		variant,
		color,
		error = false,
		disabled = false,
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
