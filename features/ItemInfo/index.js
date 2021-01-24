import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "components/Button";
import GoBack from "components/GoBack";
import ButtonGroup from "components/ButtonGroup";
import {
	ItemInfoContainerS,
	ItemInfoImgContainerS,
	ItemInfoTextLabelS,
	ItemInfoTextS,
} from "./styled";
import { toggleVisibility } from "features/MainList/reducer/slice";
import { addItem } from "features/ShoppingList/reducer/slice";
import { removeItem } from "features/MainList/reducer/slice";

export default function ItemInfo(props) {
	const { setIsShoppingList } = props;

	// < hooks >
	const router = useRouter();
	const dispatch = useDispatch();
	const { items } = useSelector((state) => state);
	const [itemInfo, setItemInfo] = useState(null);

	useEffect(() => {
		const id = router.query.id;

		let itemInfoObj = null;

		id &&
			items.forEach((el) => {
				itemInfoObj = el.items.find((elem) => {
					return elem._id === id;
				});

				if (itemInfoObj) {
					setItemInfo({ ...itemInfoObj, category: el.category });

					return;
				}
			});
	}, [router.query]);
	// </ hooks >

	// < UI >
	const UI = itemInfo && (
		<ItemInfoContainerS>
			<GoBack
				onClick={() => {
					router.replace({});

					setIsShoppingList();
				}}
			/>

			<ItemInfoImgContainerS>
				<img src={itemInfo.imgUrl} alt="abacate" />
			</ItemInfoImgContainerS>

			<ItemInfoTextLabelS>name</ItemInfoTextLabelS>

			<h3>{itemInfo.name}</h3>

			<ItemInfoTextLabelS>category</ItemInfoTextLabelS>

			<ItemInfoTextS>{itemInfo.category.name}</ItemInfoTextS>

			<ItemInfoTextLabelS>note</ItemInfoTextLabelS>

			<ItemInfoTextS>{itemInfo.note}</ItemInfoTextS>

			<ButtonGroup>
				<Button
					variant="text"
					onClick={() => {
						router.replace({});

						setIsShoppingList();

						itemInfo &&
							dispatch(
								removeItem({
									id: itemInfo._id,
									category: itemInfo.category.name,
								})
							);
					}}
				>
					delete
				</Button>

				<Button
					color="primary"
					onClick={(e) => {
						e.preventDefault();

						dispatch(
							toggleVisibility({
								id: itemInfo._id,
								category: itemInfo.category.name,
							})
						);

						dispatch(
							addItem({
								category: itemInfo.category,
								item: {
									_id: itemInfo._id,
									name: itemInfo.name,
									count: 1,
								},
							})
						);

						setIsShoppingList();
					}}
				>
					Add to list
				</Button>
			</ButtonGroup>
		</ItemInfoContainerS>
	);

	return UI;
}
