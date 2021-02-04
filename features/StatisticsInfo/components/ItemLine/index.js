import {
	ItemLineContainerS,
	ItemLineHeaderS,
	ItemLineNameS,
	ItemLineLabelS,
	LineContainerS,
	LineIndicatorS,
} from "./styled";

export default function ItemLine(props) {
	const { name, xPoint = 0 } = props;

	// < UI >
	const UI = (
		<ItemLineContainerS>
			<ItemLineHeaderS>
				<ItemLineNameS>{name}</ItemLineNameS>
				<ItemLineLabelS>{xPoint}%</ItemLineLabelS>
			</ItemLineHeaderS>

			<LineContainerS>
				<LineIndicatorS point={xPoint} />
			</LineContainerS>
		</ItemLineContainerS>
	);

	return UI;
}
