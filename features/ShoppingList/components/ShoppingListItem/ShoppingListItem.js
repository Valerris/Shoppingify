import {
	ShoppingListItemContainerS,
	ShoppingListItemS,
} from "./styled";
import CountToggle from "features/ShoppingList/components/CountToggle";
import Checkbox from "components/Controls/Checkbox";

function ShoppingListItem(props) {
	const { id, category, item, count } = props;

	const UI = (
		<ShoppingListItemContainerS>
			<Checkbox id={id}>
				<ShoppingListItemS>{item}</ShoppingListItemS>
			</Checkbox>

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
