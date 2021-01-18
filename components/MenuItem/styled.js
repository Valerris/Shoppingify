import styled, { css } from "styled-components";
import { theme } from "constants/index";

const { colors, sizes } = theme;

export const MenuItemS = styled.li`
	all: unset;
	position: relative;
	display: flex;
	justify-content: center;
	padding: 3rem 7rem;
	overflow: hidden;
	cursor: pointer;

	color: ${colors.dark1};

	${({ active }) =>
		active &&
		css`
			&::before {
				position: absolute;
				content: "";
				top: 0;
				bottom: 0;
				left: 0;
				width: 1.5rem;
				border-radius: 0 ${sizes.radius1} ${sizes.radius1} 0;
				background-color: ${colors.orange0};
			}
		`};

	i {
		font-size: 6rem;
	}
`;

export const MenuItemWrapperS = styled.div`
	margin: 0 0 6rem;

	&:last-child {
		margin-bottom: 0;
	}
`;
