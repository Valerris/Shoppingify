import { useRouter } from "next/router";
import { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import {
	HistoryCategoryContainerS,
	HistoryCategoryNameS,
} from "./styled";
import HistoryItem from "./components/HistoryItem";

export default function HistoryList(props) {
	const { setIsHistoryItemInfo } = props;

	// < hooks >
	const router = useRouter();
	const { shoppingListHistory } = useSelector((state) => state);
	useEffect(() => {
		router.replace({});
	}, []);
	// </ hooks >

	// < UI >
	const UI = shoppingListHistory.map((el) => (
		<HistoryCategoryContainerS key={el.category._id}>
			<HistoryCategoryNameS>{el.category.name}</HistoryCategoryNameS>

			{el.items.map((elem) => (
				<HistoryItem
					key={elem._id}
					title={elem.title}
					date={elem.date}
					status={elem.status}
					btnClick={() => {
						router.push({
							query: { id: elem._id },
						});

						setIsHistoryItemInfo();
					}}
				/>
			))}
		</HistoryCategoryContainerS>
	));

	return UI;
}
