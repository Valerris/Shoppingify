import styled from "styled-components";
import { theme } from "constants/index";

const { colors, sizes, shadows } = theme;

export const ListItemS = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	padding: 3.5rem 4rem;
	max-width: 45.5rem;
	cursor: pointer;

	box-shadow: ${shadows[1]};
	background: ${colors.white};
	border-radius: ${sizes.radius2};
`;
