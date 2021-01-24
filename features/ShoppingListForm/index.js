import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormS, ShoppingListFormS } from "./styled";
import ButtonGroup from "components/ButtonGroup";
import Button from "components/Button";
import FormGroup from "components/FormGroup";
import Input from "components/Controls/Input";
import {
	STATUSES,
	addTitle,
	removeTitle,
	changeStatus,
	clear,
} from "features/ShoppingList/reducer/slice";
import { addShoppingList } from "features/ShoppingListsHistory/reducer/slice";
import { makeAllItemsVisible } from "features/MainList/reducer/slice";

export default function ShoppingListForm() {
	// < hooks >
	const dispatch = useDispatch();
	const { shoppingList } = useSelector((state) => state);
	const [value, setValue] = useState("");
	// </ hooks >

	// < UI >
	const hasNoLength = !shoppingList.list.length;

	const UI = (
		<ShoppingListFormS>
			{shoppingList.status === STATUSES.adjust ? (
				<ButtonGroup>
					<Button
						variant="text"
						onClick={(e) => {
							e.preventDefault();

							dispatch(removeTitle());
							dispatch(changeStatus({ status: STATUSES.canceled }));
							dispatch(
								addShoppingList({
									shoppingList: {
										...shoppingList,
										status: STATUSES.canceled,
									},
								})
							);
							dispatch(clear());
							dispatch(makeAllItemsVisible());
						}}
					>
						cancel
					</Button>

					<Button
						color="secondary"
						onClick={(e) => {
							dispatch(changeStatus({ status: STATUSES.completed }));
							dispatch(
								addShoppingList({
									shoppingList: {
										...shoppingList,
										status: STATUSES.completed,
									},
								})
							);
							dispatch(clear());
							dispatch(makeAllItemsVisible());
						}}
					>
						Complete
					</Button>
				</ButtonGroup>
			) : (
				<FormS disabled={hasNoLength}>
					<FormGroup noMargin>
						<Input
							disabled={hasNoLength}
							fullWidth
							placeholder="Enter a name"
							value={value}
							onChange={(e) => {
								const {
									target: { value },
								} = e;

								setValue(value);
							}}
						/>
					</FormGroup>

					<Button
						disabled={hasNoLength}
						color="primary"
						type="submit"
						onClick={(e) => {
							dispatch(addTitle({ title: value }));
							dispatch(changeStatus({ status: STATUSES.adjust }));

							setValue("");
						}}
					>
						Save
					</Button>
				</FormS>
			)}
		</ShoppingListFormS>
	);

	return UI;
}
