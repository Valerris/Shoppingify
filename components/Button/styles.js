import { theme } from "constants/index";

const { colors, sizes, shadows } = theme;

// Button Variants Modifiers
const filledVariantObj = {
	default: {
		color: colors.dark01,
		background: colors.white,
		boxShadow: shadows[0],

		"&:disabled": {
			cursor: "not-allowed",
			color: colors.white,
			background: colors.gray0,
		},
	},
	primary: {
		color: colors.white,
		background: colors.orange0,

		"&:hover": {
			background: colors.orange2,
		},

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
};

const outlineVariantObj = {
	default: {
		color: colors.dark01,
		background: colors.white,
		border: `2px solid ${colors.dark01}`,

		"&:disabled": {
			cursor: "not-allowed",
			color: colors.gray0,
			background: colors.white,
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
};

const textVariantObj = {
	default: {
		color: colors.dark01,
		background: "transparent",

		"&:hover": {
			background: colors.gray10,
		},

		"&:disabled": {
			cursor: "not-allowed",
			color: colors.gray0,
		},
	},
	primary: {
		color: colors.orange0,
		background: "transparent",

		"&:hover": {
			background: colors.orange1,
		},

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
};

// Button styles
const baseObj = {
	all: "unset",
	boxSizing: "border-box",
	textAlign: "center",
	userSelect: "none",
	position: "relative",
	color: colors.dark01,
	background: colors.white,
	cursor: "pointer",
	fontSize: sizes.font.base,
	fontWeight: 700,
	lineHeight: "1.4",
	padding: "5rem 6rem",
	borderRadius: sizes.radius2,

	"& + &": {
		marginLeft: "5rem",
	},
};

const sizesObj = {
	sm: {
		...baseObj,
		fontSize: sizes.font.s,
		padding: "4rem 5rem",
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
			...filledVariantObj.default,
		},
		primary: {
			...filledVariantObj.primary,
		},
		secondary: {
			...filledVariantObj.secondary,
		},
	},

	outline: {
		default: {
			...outlineVariantObj.default,
		},
		primary: {
			...outlineVariantObj.primary,
		},
		secondary: {
			...outlineVariantObj.secondary,
		},
	},

	text: {
		default: {
			...textVariantObj.default,
		},
		primary: {
			...textVariantObj.primary,
		},
		secondary: {
			...textVariantObj.secondary,
		},
	},
};

// icon button styles
const iconBaseObj = {
	all: "unset",
	boxSizing: "border-box",
	userSelect: "none",
	cursor: "pointer",
	position: "relative",
	lineHeight: 0.1,
	borderRadius: sizes.radius2,

	"> [class^=material-icons]": {
		fontSize: "inherit",
		lineHeight: 1,
	},
};

const iconObj = {
	...iconBaseObj,
	padding: "3.5rem 2.5rem",
};

const startIconObj = {
	...iconBaseObj,
	padding: "3.5rem 2.5rem 3.5rem 6.5rem",
	lineHeight: "inherit",
};

const iconSizesObj = {
	icon: {
		sm: {
			...iconObj,
			padding: "2.5rem 1.5rem",
		},
		md: { ...iconObj },
		lg: {
			...iconObj,
			padding: "4.5rem 3.5rem",
		},
	},

	startIcon: {
		sm: {
			...startIconObj,
			fontSize: sizes.font.s,
			padding: "2.5rem 1.5rem 2.5rem 5.5rem",
		},
		md: { ...startIconObj },
		lg: {
			...startIconObj,
			fontSize: sizes.font.l,
			padding: "4.5rem 3.5rem 4.5rem 7.5rem",
		},
	},
};

const iconModifierObj = {
	icon: {
		filled: {
			default: { ...filledVariantObj.default },
			primary: { ...filledVariantObj.primary },
			secondary: { ...filledVariantObj.secondary },
		},

		outline: {
			default: { ...outlineVariantObj.default },
			primary: { ...outlineVariantObj.primary },
			secondary: { ...outlineVariantObj.secondary },
		},

		text: {
			default: { ...textVariantObj.default },
			primary: { ...textVariantObj.primary },
			secondary: { ...textVariantObj.secondary },
		},
	},

	startIcon: {
		filled: {
			default: { ...filledVariantObj.default },
			primary: { ...filledVariantObj.primary },
			secondary: { ...filledVariantObj.secondary },
		},

		outline: {
			default: { ...outlineVariantObj.default },
			primary: { ...outlineVariantObj.primary },
			secondary: { ...outlineVariantObj.secondary },
		},

		text: {
			default: {
				...textVariantObj.default,
			},
			primary: {
				...textVariantObj.primary,

				"[class^=material-icons]": {
					position: "absolute",
					top: "50%",
					left: 0,
					transform: "translateY(-40%)",
				},
			},
			secondary: {
				...textVariantObj.secondary,
			},
		},
	},

	endIcon: {},
};

const roundObj = {
	borderRadius: sizes.radius50,
};

const roundSizesObj = {
	sm: {
		padding: "0",
	},
	md: { padding: "2.5rem" },
	lg: {
		padding: "3rem",
	},
};

const noPaddingObj = {
	padding: "0",
};

const noPaddingIconObj = {
	icon: {
		...noPaddingObj,
	},

	startIcon: {
		padding: "0 0 0 4.5rem",
	},
};

export default function getStyle({
	size = "md",
	variant = "filled",
	color = "default",
	icon,
	round,
	noPadding = false,
} = {}) {
	if (icon) {
		let stylesObj = {
			...iconSizesObj[icon][size],
			...iconModifierObj[icon][variant][color],
			...(noPadding ? { ...noPaddingIconObj[icon] } : ""),
		};

		if (round) {
			stylesObj = Object.assign(stylesObj, {
				...roundObj,
				...roundSizesObj[size],
			});
		}

		return stylesObj;
	} else {
		return {
			...sizesObj[size],
			...modifierObj[variant][color],
			...(noPadding ? { ...noPaddingObj } : ""),
		};
	}
}
