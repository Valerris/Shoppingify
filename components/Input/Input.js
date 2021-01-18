import React, {
	useEffect,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import FormContext from "components/FormContext/";
import { FormGroupHandlerContext } from "components/FormGroup/FormGroup";
import FormLabel from "components/FormLabel";
import Hint from "components/Hint";
import { chooseInputType, renderInput } from "./utils";

const Input = React.forwardRef((props, ref) => {
	const {
		id,
		className,
		label,
		hint,
		placeholder,
		type,
		name,
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
		opts,
		query,

		onClick,
		onTouchEnd,
		onSelectOptsClick,
		onChange,
		onFocus,
		onBlur,
		onMouseEnter,
		onMouseLeave,
	} = props;

	const { controlId } = useContext(FormContext);
	const setCtxHandler = useContext(FormGroupHandlerContext);

	const [isOpened, setIsOpened] = useState(false);

	const closeOpts = useCallback((e) => {
		setIsOpened(e && ref && e.target === ref.current);
	}, []);

	useEffect(() => {
		["click", "touchend"].forEach((item) =>
			document.addEventListener(item, closeOpts)
		);

		return () => {
			["click", "touchend"].forEach((item) =>
				document.removeEventListener(item, closeOpts)
			);
		};
	}, []);

	const InputCmp = useMemo(() => chooseInputType(type), [type]);

	const Component = (
		<InputCmp
			ref={ref}
			id={id || controlId || undefined}
			className={className}
			placeholder={placeholder}
			type={type}
			name={name}
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
				e.preventDefault();

				if (type === "select") {
					setIsOpened((prevState) => !prevState);
				}

				onClick && onClick(e);
			}}
			onTouchEnd={(e) => {
				e.preventDefault();

				if (type === "select") {
					setIsOpened((prevState) => !prevState);
				}

				onClick && onClick(e);
			}}
			onChange={onChange}
			onFocus={(e) => {
				onFocus && onFocus(e);

				setCtxHandler((state) => ({ ...state, isFocused: true }));
			}}
			onBlur={(e) => {
				onBlur && onBlur(e);

				setCtxHandler((state) => ({ ...state, isFocused: false }));
			}}
			onMouseEnter={(e) => {
				onMouseEnter && onMouseEnter(e);
				setCtxHandler((state) => ({ ...state, isHovered: true }));
			}}
			onMouseLeave={(e) => {
				onMouseLeave && onMouseLeave(e);
				setCtxHandler((state) => ({ ...state, isHovered: false }));
			}}
		/>
	);

	const UI = (
		<>
			{label && <FormLabel error={error}>{label}</FormLabel>}
			{renderInput(
				Component,
				{
					iconName: startIcon || endIcon,
					atStart: startIcon ? true : false,
				},
				opts,
				query,
				isOpened,
				function (e) {
					onSelectOptsClick && onSelectOptsClick(e);

					setIsOpened(false);
				}
			)}
			{hint && <Hint error={error}>{hint}</Hint>}
		</>
	);

	return UI;
});

export default Input;

Input.defaultProps = {
	type: "text",
	id: undefined,
	className: undefined,
	defaultValue: undefined,
	name: undefined,
	value: undefined,
	label: undefined,
	hint: undefined,
	size: undefined,
	variant: undefined,
	color: undefined,
	fullWidth: undefined,
	rows: undefined,
	opts: undefined,
	query: undefined,

	error: false,
	disabled: false,
	multiline: false,

	onClick: () => {},
	onTouchEnd: () => {},
	onSelectOptsClick: () => {},
	onChange: () => {},
	onFocus: () => {},
	onBlur: () => {},
	onMouseEnter: () => {},
	onMouseLeave: () => {},
};
