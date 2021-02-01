import styled from "styled-components";
import { theme } from "constants/index";

const { colors, sizes, shadows } = theme;

export const HistoryItemS = styled.div`
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

export const HistoryItemNameS = styled.span`
	display: block;
	margin: 0 3rem 0 0;
`;

export const HistoryItemCountS = styled.span`
	display: block;
	white-space: nowrap;
	color: ${colors.orange0};
	font-size: ${sizes.font.xs};
	font-weight: 700;
`;
