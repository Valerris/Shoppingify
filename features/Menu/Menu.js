import { MenuS } from "./styled";
import MenuItem from "components/MenuItem";

export default function Menu() {
	const UI = (
		<MenuS>
			<MenuItem href="/#" icon="toc" active tooltip="items" />
			<MenuItem href="/#" icon="refresh" tooltip="history" />
			<MenuItem
				href="/#"
				icon="insert_chart_outlined"
				tooltip="statistics"
			/>
			<MenuItem
				href="/#"
				icon="power_settings_new"
				tooltip="logout"
			/>
		</MenuS>
	);

	return UI;
}
