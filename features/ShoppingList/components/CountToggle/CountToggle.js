import { useCallback, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { CountToggleS } from "./styled";
import Button from "components/Button";
import Label from "components/Label";
import { toggleVisibility } from "features/MainList/reducer/slice";
import {
	incCount,
	decCount,
	removeItem,
} from "features/ShoppingList/reducer/slice";

export default function CountToggle(props) {
	const { count, id, category } = props;
	const dispatch = useDispatch();
	const [isExpanded, toggleExpanded] = useState(false);

	const dispatchEvent = useCallback((fn) => {
		dispatch(fn({ id, category }));
	}, []);

	function clickHandler(e) {
		e.preventDefault();

		toggleExpanded((prevState) => !prevState);
	}

	const LabelCmp = (
		<Label variant="outline" onClick={clickHandler}>
			{count} psc
		</Label>
	);

	const UI = (
		<CountToggleS expanded={isExpanded}>
			{isExpanded ? (
				<>
					<Button
						color="primary"
						icon="delete"
						iconVariant="outlined"
						onClick={(e) => {
							e.preventDefault();

							dispatchEvent(removeItem);
							dispatchEvent(toggleVisibility);
						}}
					/>
					<Button
						round
						icon="remove"
						variant="text"
						iconVariant="round"
						color="primary"
						disabled={count === 0 ? true : false}
						onClick={(e) => {
							e.preventDefault();

							dispatchEvent(decCount);
						}}
					/>
					{LabelCmp}
					<Button
						round
						icon="add"
						variant="text"
						iconVariant="round"
						color="primary"
						onClick={(e) => {
							e.preventDefault();

							dispatchEvent(incCount);
						}}
					/>
				</>
			) : (
				LabelCmp
			)}
		</CountToggleS>
	);

	return UI;
}
