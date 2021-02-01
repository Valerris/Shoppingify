import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
	ShoppingListHistoryItemContainerS,
	ShoppingListHistoryItemCategoryS,
	ShoppingListHistoryItemLayoutS,
} from "./styled";
import DateLabel from "components/DateLabel";
import HistoryItem from "features/ShoppingListHistoryItem/components/HistoryItem";
import H1 from "common/H1";

export default function ShoppingListHistoryItem() {
	// < hooks >
	const router = useRouter();
	const { shoppingListHistory } = useSelector((state) => state);
	const [currentItem, setCurrentItem] = useState(null);
	useEffect(() => {
		const id = router.query.id;

		shoppingListHistory.forEach((el) => {
			el.items.forEach((elem) => {
				if (elem._id === id) {
					setCurrentItem(elem);
					console.log(elem);
				}
			});
		});
	}, [router.query.id]);
	// </ hooks >

	// < UI >
	const UI = currentItem && (
		<ShoppingListHistoryItemContainerS>
			<H1>{currentItem.title}</H1>

			<DateLabel>{currentItem.date}</DateLabel>

			{currentItem.list.map((el) => (
				<ShoppingListHistoryItemCategoryS key={el.category._id}>
					<h4>{el.category.name}</h4>

					<ShoppingListHistoryItemLayoutS>
						{el.items.map((elem) => (
							<HistoryItem
								key={elem._id}
								item={elem.name}
								count={elem.count}
							/>
						))}
					</ShoppingListHistoryItemLayoutS>
				</ShoppingListHistoryItemCategoryS>
			))}
		</ShoppingListHistoryItemContainerS>
	);

	return UI;
}
