import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FormS } from "./styled";
import FormGroup from "components/FormGroup";
import Input from "components/Input";
import Button from "components/Button";
import ButtonGroup from "components/ButtonGroup";
import { addItem } from "features/MainList/reducer/slice";

export default function AddItemForm(props) {
	const dispatch = useDispatch();

	const { setIsShoppingList } = props;

	const firstInputRef = useRef(null);
	const selectRef = useRef(null);

	const [name, setName] = useState("");
	const [note, setNote] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	const [categoryValue, setCategoryValue] = useState("");
	const [query, setQuery] = useState("");

	useEffect(() => {
		firstInputRef.current.focus();
	}, []);

	const UI = (
		<FormS>
			<h3>Add a new item</h3>

			<FormGroup>
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

			<FormGroup>
				<Input
					type="textarea"
					rows="5"
					label="Note (optional)"
					placeholder="Enter a note"
					variant="outline"
					value={note}
					onChange={({ target: { value } }) => {
						setNote(value);
					}}
					fullWidth
				/>
			</FormGroup>

			<FormGroup>
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

			<FormGroup>
				<Input
					ref={selectRef}
					type="select"
					label="Category"
					placeholder="Enter a category"
					variant="outline"
					value={categoryValue || query}
					fullWidth
					opts={["Fruits", "Apples", "Banana"]}
					query={query}
					onChange={(e) => {
						e.preventDefault();

						setQuery(e.target.value);
					}}
					onClick={(e) => {
						e.preventDefault();
						setQuery("");
						setCategoryValue(null);
					}}
					onSelectOptsClick={(e) => {
						e.preventDefault();
						setCategoryValue(e.target.dataset.value);
					}}
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
							category: categoryValue,
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
