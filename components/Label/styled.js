import styled from "styled-components";
import { theme } from "constants/index";

const { colors, sizes } = theme;

export const LabelS = styled.div`
	display: block;
	width: max-content;
	padding: 2rem 5rem;
	cursor: help;

	color: ${colors.orange0};
	font-size: ${sizes.font.xs};
	border: 2px solid ${colors.orange0};
	border-radius: ${sizes.radius3};
`;
