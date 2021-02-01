import styled from "styled-components";
import { theme } from "constants/index";

const { colors, sizes } = theme;

export const DateLabelContainerS = styled.div`
	display: flex;
	align-items: center;
	color: ${colors.gray02};

	.icon {
		margin: 0 3rem 0 0;
	}
`;

export const DateLabelS = styled.div`
	font-size: ${sizes.font.xs};
	font-weight: 500;
`;
