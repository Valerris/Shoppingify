import { useSelector } from "react-redux";
import { CartCounterContainerS } from "./styled";
import Button from "components/Button";
import Counter from "components/Counter";

export default function CartCounter() {
	// < hooks >
	const { shoppingList } = useSelector((state) => state);
	// </ hooks >

	// < UI >
	const shoppingListCount = shoppingList.list.reduce(
		(acc, el) => (acc += el.items.length),
		0
	);

	const UI = (
		<CartCounterContainerS>
			<Counter>{shoppingListCount}</Counter>

			<Button
				round
				color="primary"
				icon="shopping_cart"
				iconVariant="outlined"
				onClick={(e) => {
					e.preventDefault();

					console.log("clicked");
				}}
			/>
		</CartCounterContainerS>
	);

	return UI;
}
