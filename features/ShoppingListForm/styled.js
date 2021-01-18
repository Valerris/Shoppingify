import { theme } from "constants/index";
import styled from "styled-components";

const { colors, sizes } = theme;

export const ShoppingListFormS = styled.div`
	position: sticky;
	bottom: 0;
	right: 0;
	width: 100%;
	padding: 8.5rem 10rem;

	background: ${colors.white};
`;

export const FormS = styled.form`
	display: flex;

	border: 2px solid ${colors.orange0};
	border-radius: calc(${sizes.radius2} + 3px);
`;
