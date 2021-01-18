import styled from "styled-components";
import { theme } from "constants/index";
import { sizes } from "constants/theme";

const { colors, indexes } = theme;

export const CounterS = styled.span`
	position: absolute;
	display: block;
	font-size: 3rem;
	padding: 1rem 2rem;
	width: auto;
	top: 0;
	right: 0;
	transform: translate(2rem, -2rem);

	z-index: ${indexes[1]};
	border-radius: ${sizes.radius1};
	color: ${colors.white};
	background-color: ${colors.red0};
`;
