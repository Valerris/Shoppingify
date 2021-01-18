import { useSelector } from "react-redux";
import { ShoppingListS, ShoppingListCategoryS } from "./styled";
import ShoppingListItem from "features/ShoppingList/components/ShoppingListItem";
import Button from "components/Button";

export default function ShoppingList() {
	const { shoppingList } = useSelector((state) => state);

	const hasItems = shoppingList.length > 0;

	const shoppingListUI = hasItems
		? shoppingList.map((el) => {
				return (
					<ShoppingListCategoryS key={el.category._id}>
						<h5>{el.category.name}</h5>

						{el.items.map((item) => (
							<ShoppingListItem
								key={item._id}
								id={item._id}
								item={item.name}
								count={item.count}
								category={el.category.name}
							/>
						))}
					</ShoppingListCategoryS>
				);
		  })
		: "No items";

	const UI = (
		<ShoppingListS hasItems={hasItems}>
			{hasItems ? <h3>Shopping list</h3> : null}

			{shoppingListUI}

			{hasItems ? (
				<Button
					round
					variant="text"
					icon="edit"
					iconVariant="round"
					onClick={(e) => console.log("clicked")}
				/>
			) : null}
		</ShoppingListS>
	);

	return UI;
}
