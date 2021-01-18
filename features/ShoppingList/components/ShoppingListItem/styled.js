import { theme } from "constants/index";
import styled from "styled-components";

const { sizes } = theme;

export const ShoppingListItemContainerS = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;
	overflow-wrap: break-word;

	font-size: ${sizes.font.large};

	& + & {
		margin: 6rem 0 0;
	}
`;

export const ShoppingListItemS = styled.div`
	/* flex: 0 1 0; */
	margin: 0 6rem 0 0;
	width: fit-content;
`;
