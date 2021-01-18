import {
	ShoppingListItemContainerS,
	ShoppingListItemS,
} from "./styled";
import CountToggle from "features/ShoppingList/components/CountToggle";

function ShoppingListItem(props) {
	const { id, category, item, count } = props;

	const UI = (
		<ShoppingListItemContainerS>
			<ShoppingListItemS>{item}</ShoppingListItemS>

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
