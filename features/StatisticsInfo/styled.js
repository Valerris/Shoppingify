import styled from "styled-components";

export const StatisticsInfoContainerS = styled.div``;

export const StatisticsGridS = styled.div`
	display: grid;
	grid-template: auto / repeat(auto-fill, minmax(30rem, 45%));
	gap: 10rem 16.5rem;
	margin: 0 0 16.5rem;

	&:last-child {
		margin-bottom: 0;
	}
`;
