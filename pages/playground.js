import { useEffect, useRef } from "react";
import PageContainer from "common/PageContainer";
import FormGroup from "components/FormGroup";
import Input from "components/playground/Controls/Input";

export default function PlaygroundPage() {
	const ref = useRef(null);

	useEffect(() => {
		ref.current.focus();
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
					{/* <FormGroup controlId="input"> */}
					<Input
						ref={ref}
						label="Label"
						id="input"
						autofocus
						variant="outline"
						size="sm"
						startIcon="search"
					/>
					{/* </FormGroup> */}
				</div>
			</div>
		</PageContainer>
	);

	return UI;
}
