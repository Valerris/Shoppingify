import { BannerContainerS, BannerS, BannerTextS } from "./styled";
import Button from "components/Button";

export default function Banner(props) {
	const { setIsAddItemForm } = props;

	const UI = (
		<BannerContainerS>
			<BannerS>
				<BannerTextS>Didn’t find what you need?</BannerTextS>
				<Button
					size="sm"
					onClick={(e) => {
						e.preventDefault();

						setIsAddItemForm(true);
					}}
				>
					Add item
				</Button>
			</BannerS>
		</BannerContainerS>
	);

	return UI;
}
