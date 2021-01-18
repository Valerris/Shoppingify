import styled from "styled-components";
import { theme } from "constants/index";
import { colors } from "constants/theme";

const { sizes } = theme;

export const ItemInfoContainerS = styled.div`
	min-width: 77.5rem;

	& > button {
		margin-bottom: 8.5rem;
	}

	& h3 {
		margin-bottom: 8.5rem;
	}
`;

export const ItemInfoImgContainerS = styled.div`
	overflow: hidden;
	border-radius: ${sizes.radius3};
	margin: 0 0 13.5rem;

	& > img {
		object-fit: cover;
		object-position: center;
		height: 55rem;
		width: auto;
	}
`;

export const ItemInfoTextLabelS = styled.span`
	display: inline-block;
	font-size: ${sizes.font.xs};
	color: ${colors.gray02};
	margin: 0 0 2.5rem;
`;

export const ItemInfoTextS = styled.div`
	margin: 0 0 9rem;
`;

export const ItemInfoContentS = styled.div``;
