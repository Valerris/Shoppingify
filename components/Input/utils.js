import React from "react";
import {
	InputS,
	TextAreaS,
	OptionsContainerS,
	OptionS,
	InputContainerS,
} from "./styled";

export function chooseInputType(type) {
	let control = null;

	switch (type) {
		case "textarea":
			control = TextAreaS;
			break;
		// case "select":
		// 	control = SelectS;
		// 	break;
		default:
			control = InputS;
	}

	return control;
}

export function renderInput(
	Cmp,
	{ iconName, atStart },
	opts,
	query,
	isOpened,
	onSelectOptsClick
) {
	return (
		<InputContainerS atStart={atStart}>
			{iconName && <i className="material-icons-round">{iconName}</i>}
			{Cmp}
			{isOpened && opts && (
				<OptionsContainerS
					onClick={onSelectOptsClick}
					onTouchEnd={onSelectOptsClick}
				>
					{createOptions(opts, query)}
				</OptionsContainerS>
			)}
		</InputContainerS>
	);
}

export function filter(opts, query) {
	return opts.filter(
		(opt) => opt.toLowerCase().indexOf(query.toLowerCase()) > -1
	);
}

function createOptions(opts, query) {
	return filter(opts, query).map((item, i) => (
		<OptionS key={i} data-value={item}>
			{item}
		</OptionS>
	));
}
