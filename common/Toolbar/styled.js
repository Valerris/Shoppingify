import styled from "styled-components";
import { theme } from "constants/index";

const { colors, indexes } = theme;

export const ToolbarS = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	width: auto;
	padding: 8rem 0;
	background: ${colors.white};
	z-index: ${indexes[1]};

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
