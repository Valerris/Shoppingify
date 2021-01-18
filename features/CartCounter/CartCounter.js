import { CartCounterContainerS } from "./styled";
import Button from "components/Button";
import Counter from "components/Counter";

export default function CartCounter() {
	const UI = (
		<CartCounterContainerS>
			<Counter>3</Counter>

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
