import Link from "next/link";
import { MenuItemS, MenuItemWrapperS } from "./styled";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function MenuItem(props) {
	const {
		href,
		icon,
		active = false,
		tooltip,
		children,
		onClick,
	} = props;

	const Cmp = (
		<MenuItemWrapperS>
			<Link href={href}>
				<a>
					<MenuItemS active={active} onClick={onClick}>
						{icon ? (
							<i className="material-icons-round">{icon}</i>
						) : (
							children
						)}
					</MenuItemS>
				</a>
			</Link>
		</MenuItemWrapperS>
	);

	const UI = tooltip ? (
		<Tippy content={tooltip} placement="right">
			{Cmp}
		</Tippy>
	) : (
		Cmp
	);

	return UI;
}

export default MenuItem;
