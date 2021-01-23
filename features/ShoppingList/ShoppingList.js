import { useSelector } from "react-redux";
import {
	ShoppingListS,
	ShoppingListHeaderS,
	ShoppingListCategoryS,
} from "./styled";
import ShoppingListItem from "features/ShoppingList/components/ShoppingListItem";
import Button from "components/Button";

export default function ShoppingList() {
	// < hooks >
	const { shoppingList } = useSelector((state) => state);
	// </ hooks >

	// < UI >
	const hasItems = shoppingList.list.length > 0;

	const shoppingListUI = hasItems
		? shoppingList.list.map((el) => {
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
								listStatus={shoppingList.status}
							/>
						))}
					</ShoppingListCategoryS>
				);
		  })
		: "No items";

	const headerUI = (
		<ShoppingListHeaderS>
			{shoppingList.title ? (
				<h3>{shoppingList.title}</h3>
			) : (
				<>
					<h3>Shopping list</h3>

					<Button
						round
						variant="text"
						icon="edit"
						iconVariant="round"
						onClick={(e) => console.log("clicked")}
					/>
				</>
			)}
		</ShoppingListHeaderS>
	);

	const UI = (
		<ShoppingListS hasItems={hasItems}>
			{hasItems ? headerUI : null}

			{shoppingListUI}
		</ShoppingListS>
	);

	return UI;
}
