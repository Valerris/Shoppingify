import Button from "components/Button";
import { ListItemS } from "./styled";

function ListItem(props) {
	const { item, onClick, btnClick } = props;

	const UI = (
		<ListItemS onClick={onClick}>
			{item}

			<Button
				round
				size="sm"
				icon="add"
				variant="text"
				iconVariant="round"
				onClick={btnClick}
			/>
		</ListItemS>
	);

	return UI;
}

export default ListItem;

ListItem.defaultProps = {
	item: "",
};
