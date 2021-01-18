import { useState } from "react";
import { FormS, ShoppingListFormS } from "./styled";
import Button from "components/Button";
import FormGroup from "components/FormGroup";
import Input from "components/Input";

export default function ShoppingListForm() {
	const [value, setValue] = useState("");

	const UI = (
		<ShoppingListFormS>
			<FormS>
				<FormGroup noMargin>
					<Input
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
					color="primary"
					type="submit"
					onClick={(e) => e.preventDefault()}
				>
					Save
				</Button>
			</FormS>
		</ShoppingListFormS>
	);

	return UI;
}
