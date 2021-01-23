import styled from "styled-components";
import { theme } from "constants/index";

const { colors, sizes } = theme;

export const CheckboxCheckMarkS = styled.span`
	display: block;
	position: relative;
	width: 6rem;
	height: 6rem;
	margin: 0 4rem 0 0;
	font-size: 1rem;
	overflow: hidden;
	background: transparent;
	border: 2px solid ${colors.orange0};
	border-radius: ${sizes.radius1};

	&::before {
		content: "";
		position: absolute;
		left: 2rem;
		top: 0.75rem;
		width: 1.5rem;
		height: 3rem;
		border-color: ${colors.orange0};
		border-style: solid;
		border-width: 0px 2px 2px 0px;
		transform: scale(0);
	}

	&:last-child {
		margin-right: 0;
	}
`;

export const CheckboxS = styled.input.attrs(() => ({
	type: "checkbox",
}))`
	position: absolute;
	opacity: 0;
	cursor: pointer;
`;

export const CheckboxContainerS = styled.div`
	& > label {
		position: relative;
		display: flex;
		align-items: center;
		margin: 0;
		cursor: pointer;
		user-select: none;

		& > ${CheckboxS}:checked ~ ${CheckboxCheckMarkS}::before {
			transform: rotate(45deg) scale(1);
		}

		& > ${CheckboxS}:checked ~ span {
			text-decoration: line-through;
		}
	}
`;
