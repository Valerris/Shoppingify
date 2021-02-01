import styled from "styled-components";
import { theme } from "constants/index";

const { sizes } = theme;

export const HistoryCategoryContainerS = styled.div`
	margin: 0 0 13.5rem;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const HistoryCategoryNameS = styled.div`
	font-size: ${sizes.font.xs};
	font-weight: 700;
	margin: 0 0 4.5rem;
`;
