import styled from "styled-components";
import { theme } from "constants/index";

const { colors, sizes } = theme;

export const CountToggleS = styled.div`
	display: flex;
	align-items: center;

	background: ${({ expanded }) =>
		expanded ? colors.white : "transparent"};
	border-radius: ${sizes.radius2};
`;
