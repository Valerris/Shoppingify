import styled from "styled-components";
import { DateLabelContainerS } from "components/DateLabel/styled";

export const ShoppingListHistoryItemContainerS = styled.div`
	& > h1 {
		margin-bottom: 3.5rem;
	}

	${DateLabelContainerS} {
		margin: 0 0 13rem;
	}
`;
export const ShoppingListHistoryItemTitleS = styled.div``;

export const ShoppingListHistoryItemCategoryS = styled.section`
	width: 100%;
	margin: 0 0 10rem;
`;

export const ShoppingListHistoryItemLayoutS = styled.div`
	display: grid;
	grid-template: auto / repeat(auto-fill, minmax(25rem, 42rem));
	gap: 7rem 5rem;
`;
