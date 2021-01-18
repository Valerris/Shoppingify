import { theme } from "constants/index";
import styled from "styled-components";

const { colors, indexes } = theme;

export const AsideS = styled.div`
	max-width: 97.5rem;
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	overflow-x: hidden;
	overflow-y: auto;

	background: ${colors.orange1};
	z-index: ${indexes[1]};

	& > div:first-child {
		min-height: 100%;
		display: flex;
		flex-direction: column;
		padding: 8.5rem;
	}
`;
