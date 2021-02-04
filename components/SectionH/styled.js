import styled from "styled-components";
import { theme } from "constants/index";

const { sizes } = theme;

export const SectionHeaderS = styled.div`
	font-size: ${sizes.font.xl};
	margin: 0 0 9.5rem;

	&:last-child {
		margin-bottom: 0;
	}
`;
