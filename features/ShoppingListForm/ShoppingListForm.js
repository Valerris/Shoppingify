import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormS, ShoppingListFormS } from "./styled";
import ButtonGroup from "components/ButtonGroup";
import Button from "components/Button";
import FormGroup from "components/FormGroup";
import Input from "components/Input";
import {
	STATUSES,
	addTitle,
	removeTitle,
	changeStatus,
} from "features/ShoppingList/reducer/slice";

export default function ShoppingListForm() {
	const dispatch = useDispatch();

	const { status, list } = useSelector((state) => state.shoppingList);
	const [value, setValue] = useState("");

	const hasNoLength = !list.length;

	const UI = (
		<ShoppingListFormS>
			{status === STATUSES.adjust ? (
				<ButtonGroup>
					<Button
						variant="text"
						onClick={(e) => {
							e.preventDefault();

							dispatch(removeTitle());

							dispatch(changeStatus({ status: STATUSES.edit }));
						}}
					>
						cancel
					</Button>

					<Button
						color="secondary"
						onClick={(e) => e.preventDefault()}
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
								e.preventDefault();

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
							e.preventDefault();

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
