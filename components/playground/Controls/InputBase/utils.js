import React from "react";
import { InputBaseS, TextAreaS, InputContainerS } from "./styled";

export function chooseType(type) {
	switch (type) {
		case "textarea":
			return TextAreaS;
		default:
			return InputBaseS;
	}
}

export function withIcon(Cmp, { iconName, atStart }) {
	return (
		<InputContainerS atStart={atStart}>
			{iconName && <i className="material-icons-round">{iconName}</i>}
			{Cmp}
		</InputContainerS>
	);
}
