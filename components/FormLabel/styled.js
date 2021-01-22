import styled from "styled-components";
import { theme } from "constants/index";

const { colors } = theme;

export const FormLabelS = styled.label`
	display: block;
	margin: 0 0 2rem;
	color: ${({ color, error, isHovered, isFocused }) => {
		if (error || isFocused || isHovered) {
			if (isHovered && !isFocused) {
				return colors.orange0;
			}

			if (error) {
				return colors.persianRed;
			}

			if (!error && isFocused) {
				return colors.orange0;
			}
		} else {
			return color || colors.dark01;
		}
	}};

	&:hover {
		pointer-events: none;
	}
`;
