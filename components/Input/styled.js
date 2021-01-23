import styled from "styled-components";
import { theme } from "constants/index";
import calculatedStyles from "./styles";

const { colors, sizes, shadows, indexes } = theme;

// input
export const InputS = styled.input(calculatedStyles);

// select
// export const SelectS = styled.select(calculatedStyles);

// textarea
const TextArea = styled.textarea(calculatedStyles);

export const TextAreaS = styled(TextArea).attrs(({ rows }) => ({
	rows: rows || 3,
}))`
	overflow-wrap: break-word;
	resize: vertical;
`;

export const OptionsContainerS = styled.ul`
	all: unset;
	display: block;
	box-sizing: border-box;
	width: 100%;
	/* position: absolute; */
	top: 100%;
	left: 0;
	padding: 3rem 2rem;
	background: ${colors.white};
	box-shadow: ${shadows[0]};
	border: 1px solid ${colors.gray30};
	border-radius: ${sizes.radius2};
	transform: translateY(3rem);
	z-index: ${indexes[1]};
`;

export const OptionS = styled.li.attrs((props) => ({
	tabIndex: true,
}))`
	all: unset;
	display: block;
	box-sizing: border-box;
	cursor: pointer;
	color: ${colors.gray01};
	padding: 3rem 5.5rem;
	border-radius: ${sizes.radius2};

	&:hover,
	&.active {
		color: ${colors.dark01};
		background: ${colors.gray10};
	}
`;

export const InputContainerS = styled.div`
	position: relative;
	margin: 0 0 1rem;
	min-width: 0;

	&:last-child {
		margin-bottom: 0;
	}

	[class^="material-icons-round"] {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);

		color: ${colors.dark01};

		left: ${({ atStart }) => (atStart ? "4rem" : "initial")};
		right: ${({ atStart }) => (!atStart ? "3rem" : "initial")};
	}
`;
