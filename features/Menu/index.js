import { MenuS } from "./styled";
import { useRouter } from "next/router";
import { useState } from "react";
import MenuItem from "components/MenuItem";
import { MENU_ITEMS } from "./mocks";

export default function Menu() {
	// < hooks >
	const router = useRouter();
	const [currentActive, setCurrentActive] = useState(router.pathname);
	// </ hooks >

	// < handlers >
	function clickHandler() {
		setCurrentActive(router.pathname);
	}
	function toggleCurrentActive(idx) {
		return MENU_ITEMS[idx].href === currentActive;
	}
	// </ handlers >

	// < UI >
	const UI = (
		<MenuS>
			{MENU_ITEMS.map((el, idx) => (
				<MenuItem
					key={el._id}
					href={el.href}
					icon={el.icon}
					active={toggleCurrentActive(idx)}
					tooltip={el.tooltip}
					onClick={clickHandler.bind(null, el._id)}
				/>
			))}
		</MenuS>
	);

	return UI;
}
