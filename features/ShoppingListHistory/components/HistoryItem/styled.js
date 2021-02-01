import styled from "styled-components";
import { theme } from "constants/index";

const { colors, sizes, shadows } = theme;

export const HistoryItemContainerS = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* padding: 3.25rem 5rem; */
	padding: 3.25rem 0;
	margin: 0 0 7rem;
	width: 100%;

	box-shadow: ${shadows[1]};
	background: ${colors.white};
	border-radius: ${sizes.radius2};

	&:last-child {
		margin-bottom: 0;
	}
`;

export const HistoryItemMainS = styled.div`
	flex: 1;
	padding: 0 5rem;
`;

export const HistoryItemAsideS = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const HistoryItemDateWrapperS = styled.div`
	padding: 0 4rem;
`;

export const HistoryItemStatusContainerS = styled.div`
	padding: 0 4rem;
`;

export const HistoryItemStatusS = styled.div`
	color: ${({ status }) =>
		status === "cancelled" ? colors.red0 : colors.blue0};
	font-size: ${sizes.font.xs};
	padding: 1rem 1.5rem;
	border: 1px solid
		${({ status }) =>
			status === "cancelled" ? colors.red0 : colors.blue0};
	border-radius: ${sizes.radius10};
`;
