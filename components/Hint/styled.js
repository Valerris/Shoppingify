import styled from "styled-components";
import { theme } from "constants/index";

const { sizes, colors } = theme;

export const HintS = styled.small`
	margin: 0 0 1rem;
	color: ${(props) =>
		props.error ? colors.persianRed : colors.gray3};
	font-size: 3rem;
`;
