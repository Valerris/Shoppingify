import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListS, ListCategoryS, ListLayoutS } from "./styled";
import ListItem from "features/MainList/components/ListItem";
import { toggleVisibility } from "features/MainList/reducer/slice";
import { addItem } from "features/ShoppingList/reducer/slice";

export default function MainList(props) {
	const router = useRouter();
	const dispatch = useDispatch();

	const { setIsItemInfo, setIsShoppingList } = props;
	const { items } = useSelector((state) => state);

	useEffect(() => {
		router.replace({});
	}, []);

	const UI = (
		<ListS>
			{items.map((el) => {
				return (
					<ListCategoryS key={el.category._id}>
						<h4>{el.category.name}</h4>

						<ListLayoutS>
							{el.items.map(
								(item, i) =>
									item.isVisible && (
										<div key={item._id}>
											<ListItem
												item={item.name}
												onClick={(e) => {
													e.preventDefault();

													router.push({
														query: { id: item._id },
													});

													setIsItemInfo();
												}}
												btnClick={(e) => {
													e.preventDefault();
													e.stopPropagation();

													dispatch(
														toggleVisibility({
															id: item._id,
															category: el.category.name,
														})
													);

													dispatch(
														addItem({
															category: el.category,
															item: {
																_id: item._id,
																name: item.name,
																count: 1,
															},
														})
													);

													setIsShoppingList();
												}}
											/>
										</div>
									)
							)}
						</ListLayoutS>
					</ListCategoryS>
				);
			})}
		</ListS>
	);

	return UI;
}
