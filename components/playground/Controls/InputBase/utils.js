import React from "react";
import { InputContainerS } from "./styled";

export function withIcon(Cmp, { iconName, atStart }) {
	return (
		<InputContainerS atStart={atStart}>
			{iconName && <i className="material-icons-round">{iconName}</i>}
			{Cmp}
		</InputContainerS>
	);
}
