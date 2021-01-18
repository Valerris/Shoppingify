import styled from "styled-components";
import getStyle from "./styles";

export const ButtonS = styled.button(
	({
		size,
		color,
		variant,
		icon,
		startIcon,
		endIcon,
		round,
		noPadding,
	}) =>
		getStyle({
			size,
			variant,
			color,
			icon:
				(icon && "icon") ||
				(startIcon && "startIcon") ||
				(endIcon && "endIcon") ||
				undefined,
			round: round && "round",
			noPadding,
		})
);
