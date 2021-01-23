import { useEffect, useRef } from "react";
import PageContainer from "common/PageContainer";
import FormGroup from "components/FormGroup";
import Input from "components/playground/Controls/Input";
import Select from "components/playground/Controls/Select";
import Checkbox from "components/playground/Controls/Checkbox";

const mock = [
	{
		value: "Option 1",
		name: "Option 1",
	},
	{
		value: "Option 2",
		name: "Option 2",
	},
	{
		value: "Option 3",
		name: "Option 3",
	},
	{
		value: "Test 1",
		name: "Test 1",
	},
];

export default function PlaygroundPage() {
	const ref = useRef(null);

	useEffect(() => {
		ref && ref.current?.focus();
	}, []);

	const UI = (
		<PageContainer>
			<div
				style={{
					width: "100%",
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div>
					{/* <FormGroup controlId="input">
						<Input
							ref={ref}
							label="Label"
							id="input"
							autofocus
							variant="outline"
							size="sm"
							startIcon="search"
						/>
					</FormGroup> */}

					{/* <FormGroup controlId="select">
						<Select
							label="Label"
							hint="Hint"
							size="sm"
							variant="outline"
							options={mock}
						/>
					</FormGroup> */}

					<Checkbox id="checkbox">Checkbox</Checkbox>
				</div>
			</div>
		</PageContainer>
	);

	return UI;
}
