import styled from "styled-components";
import { theme } from "constants/index";
import bottleUri from "public/images/bottle.svg";

const { colors, sizes, indexes } = theme;

export const BannerContainerS = styled.div`
	position: relative;
	margin: 0 0 11rem;
`;

export const BannerS = styled.div`
	position: relative;
	width: 100%;
	padding: 4.5rem 7rem 4.5rem 30.5rem;

	background: ${colors.purple1};
	border-radius: ${sizes.radius3};

	&::before {
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(3rem, -4.5rem);
		content: "";
		display: block;
		width: 22rem;
		height: 35rem;
		background: url("images/bottle.svg") center / 95% no-repeat;
	}
`;

export const BannerTextS = styled.span`
	max-width: 40rem;
	display: block;
	margin: 0 0 3.5rem;

	color: ${colors.white};
`;
