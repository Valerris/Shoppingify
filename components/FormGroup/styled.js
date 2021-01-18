import styled, { css } from "styled-components";

export const FormGroupS = styled.div`
	flex: 1 1 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	${({ noMargin }) =>
		!noMargin &&
		css`
			margin: 0 0 4.5rem;
		`}

	&:last-child {
		margin-bottom: 0;
	}
`;
