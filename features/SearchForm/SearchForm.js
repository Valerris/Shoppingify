import { useEffect, useRef, useState } from "react";
import FormGroup from "components/FormGroup";
import Input from "components/Input";

export default function SearchForm() {
	const ref = useRef();
	const [value, setValue] = useState("");

	useEffect(() => ref.current.focus(), []);

	const UI = (
		<FormGroup controlId="search">
			<Input
				ref={ref}
				fullWidth
				startIcon="search"
				size="sm"
				placeholder="search item"
				value={value}
				onChange={({ target: { value } }) => setValue(value)}
			/>
		</FormGroup>
	);

	return UI;
}
