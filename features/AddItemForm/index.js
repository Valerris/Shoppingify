import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FormS } from "./styled";
import FormGroup from "components/FormGroup";
import Input from "components/Controls/Input";
import Button from "components/Button";
import ButtonGroup from "components/ButtonGroup";
import Select from "components/Controls/Select";
import { addItem } from "features/MainList/reducer/slice";

const optionsMock = [
	{ value: "Fruits", name: "Fruits" },
	{ value: "Apples", name: "Apples" },
	{ value: "Banana", name: "Banana" },
];

export default function AddItemForm(props) {
	const { setIsShoppingList } = props;

	// < hooks >
	const dispatch = useDispatch();

	const firstInputRef = useRef(null);
	const selectRef = useRef(null);

	const [name, setName] = useState("");
	const [note, setNote] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	useEffect(() => {
		firstInputRef.current.focus();
	}, []);
	// </ hooks >

	// < UI >
	const UI = (
		<FormS>
			<h3>Add a new item</h3>

			<FormGroup controlId="name">
				<Input
					ref={firstInputRef}
					label="Name"
					placeholder="Enter a name"
					variant="outline"
					value={name}
					onChange={({ target: { value } }) => {
						setName(value);
					}}
					fullWidth
				/>
			</FormGroup>

			<FormGroup controlId="note">
				<Input
					label="Note (optional)"
					type="textarea"
					rows="5"
					placeholder="Enter a note"
					variant="outline"
					value={note}
					onChange={({ target: { value } }) => {
						setNote(value);
					}}
					fullWidth
				/>
			</FormGroup>

			<FormGroup controlId="image">
				<Input
					label="Image (optional)"
					placeholder="Enter a url"
					variant="outline"
					value={imageUrl}
					onChange={({ target: { value } }) => {
						setImageUrl(value);
					}}
					fullWidth
				/>
			</FormGroup>

			<FormGroup controlId="category">
				<Select
					ref={selectRef}
					label="Category"
					variant="outline"
					placeholder="Enter a category"
					fullWidth
					options={optionsMock}
				/>
			</FormGroup>

			<ButtonGroup>
				<Button
					variant="text"
					onClick={(e) => {
						e.preventDefault();

						setIsShoppingList();
					}}
				>
					cancel
				</Button>

				<Button
					color="primary"
					onClick={() => {
						const newItem = {
							name,
							note,
							imageUrl,
							category: selectRef.current.value,
						};

						dispatch(addItem(newItem));

						setIsShoppingList();
					}}
				>
					Save
				</Button>
			</ButtonGroup>
		</FormS>
	);

	return UI;
}
