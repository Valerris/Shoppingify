import styled from "styled-components";
import { theme } from "constants/index";

const { colors, sizes, shadows, indexes } = theme;

export const SelectContainerS = styled.div``;

export const OptionsContainerS = styled.ul`
	all: unset;
	display: block;
	box-sizing: border-box;
	width: 100%;
	padding: 3rem 2rem;
	min-height: 17rem;
	background: ${colors.white};
	box-shadow: ${shadows[0]};
	border: 1px solid ${colors.gray30};
	border-radius: ${sizes.radius2};
	transform: translateY(3rem);
	z-index: ${indexes[1]};
`;

export const OptionS = styled.li.attrs((props) => ({
	tabIndex: 1,
}))`
	all: unset;
	display: block;
	box-sizing: border-box;
	cursor: pointer;
	padding: 3rem 5.5rem;
	color: ${colors.gray01};
	border-radius: ${sizes.radius2};

	&:hover,
	&.active {
		color: ${colors.dark01};
		background: ${colors.gray10};
	}
`;
