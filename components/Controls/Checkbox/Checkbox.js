import React from "react";
import {
	CheckboxS,
	CheckboxCheckMarkS,
	CheckboxContainerS,
} from "./styled";
import FormLabel from "components/FormLabel";

function Checkbox(props, ref) {
	const { id, defaultChecked, checked, children, onChange } = props;

	// < UI >
	const UI = (
		<CheckboxContainerS>
			<FormLabel htmlFor={id}>
				<CheckboxS
					ref={ref}
					id={id}
					defaultChecked={defaultChecked}
					checked={checked}
					onChange={onChange}
				/>
				<CheckboxCheckMarkS />

				{children && <span>{children}</span>}
			</FormLabel>
		</CheckboxContainerS>
	);

	return UI;
}

export default React.forwardRef(Checkbox);
