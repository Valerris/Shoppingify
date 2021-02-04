import { StatisticsInfoContainerS } from "./styled";
import ItemLine from "./components/ItemLine";
import SectionH from "components/SectionH/SectionH";

export default function StatisticsInfo(props) {
	const { title = "Info", itemsStatistics = [] } = props;

	// < UI >
	const UI = (
		<StatisticsInfoContainerS>
			<SectionH>{title}</SectionH>

			<ItemLine name="Banana" xPoint="23" />
		</StatisticsInfoContainerS>
	);

	return UI;
}
