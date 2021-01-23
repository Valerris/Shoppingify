import {
	ShoppingListItemContainerS,
	ShoppingListItemS,
} from "./styled";
import CountToggle from "features/ShoppingList/components/CountToggle";
import Checkbox from "components/Controls/Checkbox";
import { STATUSES } from "features/ShoppingList/reducer/slice";

function ShoppingListItem(props) {
	const { id, category, item, count, listStatus } = props;

	// < UI >
	const ItemCmp = <ShoppingListItemS>{item}</ShoppingListItemS>;

	const itemUI =
		listStatus === STATUSES.adjust ? (
			<Checkbox id={id}>{ItemCmp}</Checkbox>
		) : (
			ItemCmp
		);
	const UI = (
		<ShoppingListItemContainerS>
			{itemUI}

			<CountToggle count={count} id={id} category={category} />
		</ShoppingListItemContainerS>
	);

	return UI;
}

export default ShoppingListItem;

ShoppingListItem.defaultProps = {
	category: undefined,
	item: null,
	count: 0,
};
