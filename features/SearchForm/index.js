import { useEffect, useRef, useState } from "react";
import Input from "components/Controls/Input";

export default function SearchForm() {
	const ref = useRef();
	const [value, setValue] = useState("");

	useEffect(() => ref.current.focus(), []);

	const UI = (
		<Input
			ref={ref}
			id="search"
			fullWidth
			size="sm"
			startIcon="search"
			placeholder="search item"
			value={value}
			onChange={({ target: { value } }) => setValue(value)}
		/>
	);

	return UI;
}
