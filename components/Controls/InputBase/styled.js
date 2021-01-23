import { theme } from "constants/index";
import styled from "styled-components";
import calculatedStyles from "./styles";

const { colors } = theme;

// input
export const InputBaseS = styled.input(calculatedStyles);

// textarea
const TextAreaBase = styled.textarea(calculatedStyles);

export const TextAreaS = styled(TextAreaBase).attrs(({ rows }) => ({
	rows: rows || 3,
}))`
	overflow-wrap: break-word;
	resize: vertical;
`;

// container
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
