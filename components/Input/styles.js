import { theme } from "constants/index";

const { colors, sizes, shadows } = theme;

// input styles
const baseObj = {
	all: "unset",
	boxSizing: "border-box",
	color: colors.dark01,
	background: colors.white,
	fontSize: sizes.font.base,
	fontWeight: 500,
	lineHeight: "1.4",
	padding: "5.5rem 4.5rem",
	borderRadius: sizes.radius2,

	"::placeholder": {
		color: colors.gray0,
	},
};

const sizesObj = {
	sm: {
		...baseObj,
		fontSize: sizes.font.s,
		padding: "4rem 6rem",
	},
	md: { ...baseObj },
	lg: {
		...baseObj,
		fontSize: sizes.font.l,
		padding: "6rem 7rem",
	},
};

const modifierObj = {
	filled: {
		default: {
			boxShadow: shadows[0],

			"&:disabled": {
				cursor: "not-allowed",
				color: colors.white,
				background: colors.white,
			},
		},
		primary: {
			color: colors.white,
			background: colors.orange0,

			"&:disabled": {
				cursor: "not-allowed",
				color: colors.white,
				background: colors.gray0,
			},
		},
		secondary: {
			color: colors.white,
			background: colors.blue0,

			"&:disabled": {
				cursor: "not-allowed",
				color: colors.white,
				background: colors.gray0,
			},
		},
	},

	outline: {
		default: {
			background: colors.white,
			border: `2px solid ${colors.gray0}`,

			"&:hover, &:focus": {
				borderColor: colors.orange0,
			},

			"&:disabled": {
				cursor: "not-allowed",
				color: colors.gray0,
				background: colors.gray1,
				border: `2px solid ${colors.gray0}`,
			},
		},
		primary: {
			color: colors.orange0,
			background: colors.white,
			border: `2px solid ${colors.orange0}`,

			"&:disabled": {
				cursor: "not-allowed",
				color: colors.gray0,
				background: colors.white,
				border: `2px solid ${colors.gray0}`,
			},
		},
		secondary: {
			color: colors.blue0,
			background: colors.white,
			border: `2px solid ${colors.blue0}`,

			"&:disabled": {
				cursor: "not-allowed",
				color: colors.gray0,
				background: colors.white,
				border: `2px solid ${colors.gray0}`,
			},
		},
	},

	text: {
		default: {
			color: colors.dark01,
			background: "transparent",

			"&:disabled": {
				cursor: "not-allowed",
				color: colors.gray0,
			},
		},
		primary: {
			color: colors.orange0,
			background: "transparent",

			"&:disabled": {
				cursor: "not-allowed",
				color: colors.gray0,
			},
		},
		secondary: {
			color: colors.blue0,
			background: "transparent",

			"&:disabled": {
				cursor: "not-allowed",
				color: colors.gray0,
			},
		},
	},
};

const widthObj = {
	default: {
		width: "45rem",
	},

	fullWidth: {
		width: "100%",
	},
};

// icon button styles
const iconBaseObj = {
	all: "unset",
	boxSizing: "border-box",
	cursor: "pointer",
	lineHeight: 0.1,
	padding: "3.5rem 2.5rem",
	borderRadius: sizes.radius2,

	"[class^=material-icons]": {
		fontSize: "5rem",
	},
};

const iconModifierObj = {
	icon: {
		filled: {
			default: {
				color: colors.dark01,
				background: colors.white,
				boxShadow: shadows[0],
			},
			primary: {
				color: colors.white,
				background: colors.orange0,
			},
			secondary: {
				color: colors.white,
				background: colors.blue0,
			},
		},

		outline: {
			default: {
				color: colors.dark01,
				background: colors.white,
				border: `2px solid ${colors.dark01}`,
			},
			primary: {
				color: colors.orange0,
				background: colors.white,
				border: `2px solid ${colors.orange0}`,
			},
			secondary: {
				color: colors.blue0,
				background: colors.white,
				border: `2px solid ${colors.blue0}`,
			},
		},

		text: {
			default: {
				color: colors.gray02,
				background: "transparent",

				"&:hover": {
					background: colors.gray10,
				},
			},
			primary: {
				color: colors.orange0,
				background: "transparent",

				"&:hover": {
					background: colors.orange1,
				},
			},
			secondary: {
				color: colors.blue0,
				background: "transparent",
			},
		},
	},

	startIcon: {
		paddingLeft: "14rem",
	},
	endIcon: {
		paddingRight: "14rem",
	},
};

function getStyle({
	size = "md",
	variant = "filled",
	color = "default",
	width = "default",
	icon,
} = {}) {
	return {
		...sizesObj[size],
		...modifierObj[variant][color],
		...widthObj[width],
		...iconModifierObj[icon],
	};
}

const calculatedStyles = ({
	size,
	variant,
	color,
	fullWidth,
	startIcon,
	endIcon,
}) =>
	getStyle({
		size,
		variant,
		color,
		width: fullWidth ? "fullWidth" : "default",
		icon: (startIcon && "startIcon") || (endIcon && "endIcon"),
	});

export default calculatedStyles;
