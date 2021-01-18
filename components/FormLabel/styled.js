import styled from "styled-components";
import { theme } from "constants/index";

const { colors } = theme;

export const FormLabelS = styled.label`
	margin: 0 0 2rem;
	color: ${({ color, error, isFocused, isHovered }) => {
		if (error || isFocused || isHovered) {
			if (isHovered && !isFocused) {
				return colors.dark01;
			}

			if (error) {
				return colors.persianRed;
			}

			if (!error && isFocused) {
				return colors.royalBlue;
			}
		} else {
			return color || colors.dark01;
		}
	}};

	&:hover {
		pointer-events: none;
	}
`;
