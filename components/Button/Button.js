import { ButtonS } from "./styled";

export default function Button(props) {
	const {
		type,
		color,
		variant,
		size,
		icon,
		iconVariant,
		startIcon,
		endIcon,
		round,
		disableShadow,
		disabled,
		noMargin,
		noPadding,
		children,
		onClick,
	} = props;

	const iconVariantClass = `material-icons${
		iconVariant && "-" + iconVariant
	}`;

	const UI = (
		<ButtonS
			type={type}
			color={color}
			variant={variant}
			size={size}
			icon={icon}
			iconVariant={iconVariant}
			startIcon={startIcon}
			endIcon={endIcon}
			round={round}
			disableShadow={disableShadow}
			disabled={disabled}
			noMargin={noMargin}
			noPadding={noPadding}
			onClick={onClick}
		>
			{icon ? (
				<i className={iconVariantClass}>{icon}</i>
			) : (
				<span>{children}</span>
			)}

			{(startIcon || endIcon) && (
				<>
					<i className={iconVariantClass}>{startIcon || endIcon}</i>
				</>
			)}
		</ButtonS>
	);

	return UI;
}

Button.defaultProps = {
	type: "button",
	color: undefined,
	variant: undefined,
	size: undefined,
	icon: undefined,
	iconVariant: "",
	startIcon: "",
	endIcon: "",
	round: false,
	disableShadow: false,
	disabled: false,
	noMargin: false,
	noPadding: false,
	onClick: () => {},
};
