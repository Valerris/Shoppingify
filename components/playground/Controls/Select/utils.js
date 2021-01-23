import { OptionS } from "./styled";

export const createOptions = (options, query) => {
	let filteredOptions = filterOptions(options, query);

	if (filteredOptions.length === 0) {
		filteredOptions = [{ value: "", name: "No results..." }];
	}

	return filteredOptions.map((option, i) => (
		<OptionS key={i} data-value={option.value}>
			{option.name}
		</OptionS>
	));
};

export function filterOptions(options, query) {
	return options.filter(
		({ value }) =>
			value.toLowerCase().indexOf(query.toLowerCase()) > -1
	);
}
