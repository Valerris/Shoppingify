import {
	HistoryItemContainerS,
	HistoryItemMainS,
	HistoryItemAsideS,
	HistoryItemDateWrapperS,
	HistoryItemStatusContainerS,
	HistoryItemStatusS,
} from "./styled";
import Button from "components/Button";
import DateLabel from "components/DateLabel";

export default function HistoryItem(props) {
	const { title, date, status, btnClick } = props;

	// < UI >
	const UI = (
		<HistoryItemContainerS>
			<HistoryItemMainS>{title}</HistoryItemMainS>

			<HistoryItemAsideS>
				<HistoryItemDateWrapperS>
					<DateLabel>{date}</DateLabel>
				</HistoryItemDateWrapperS>

				<HistoryItemStatusContainerS>
					<HistoryItemStatusS status={status}>
						{status}
					</HistoryItemStatusS>
				</HistoryItemStatusContainerS>
			</HistoryItemAsideS>

			<Button
				variant="text"
				color="primary"
				icon="arrow_forward_ios"
				iconVariant="round"
				round
				onClick={btnClick}
			/>
		</HistoryItemContainerS>
	);

	return UI;
}
