import styled, { css } from "styled-components";
import { theme } from "constants/index";

const { colors } = theme;

export const ShoppingListS = styled.section`
	flex: 1;
	position: relative;
	width: 100%;

	${({ hasItems }) =>
		!hasItems &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 5rem;
			font-weight: bold;
			color: ${colors.dark01};

			background: border-box center bottom / 70% no-repeat
				url("/images/shopping.svg");
		`}
`;

export const ShoppingListHeaderS = styled.div`
	position: relative;

	& > button {
		position: absolute;
		top: 0;
		right: 2rem;
	}

	& > button > i[class*="material-icons"] {
		color: ${colors.dark01};
	}
`;

export const ShoppingListCategoryS = styled.section`
	width: 100%;

	& + & {
		margin: 13rem 0 0;
	}
`;
