import styled from "styled-components";
import { theme } from "constants/index";

const { sizes, colors } = theme;

export const ItemLineContainerS = styled.div``;

export const ItemLineHeaderS = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 0 3.5rem;
`;

export const ItemLineNameS = styled.div`
	font-size: ${sizes.font.s};
`;

export const ItemLineLabelS = styled.div`
	font-size: ${sizes.font.l};
`;

export const LineContainerS = styled.div`
	position: relative;
	width: 100%;
	height: 1.5rem;
	overflow: hidden;
	border-radius: ${sizes.radius1};
	background: ${colors.gray30};
`;

export const LineIndicatorS = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	border-radius: ${sizes.radius1};
	background: ${colors.orange0};
	width: ${({ point }) => point && point + "%"};
`;
