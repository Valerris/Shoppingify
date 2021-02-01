import {
	HistoryItemS,
	HistoryItemNameS,
	HistoryItemCountS,
} from "./styled";

export default function HistoryItem(props) {
	const { item, count, onClick, btnClick } = props;

	const UI = (
		<HistoryItemS onClick={onClick}>
			<HistoryItemNameS>{item}</HistoryItemNameS>

			<HistoryItemCountS>{count} psc</HistoryItemCountS>
		</HistoryItemS>
	);

	return UI;
}
