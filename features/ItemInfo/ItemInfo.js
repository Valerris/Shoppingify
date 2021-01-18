import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "components/Button";
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
	const router = useRouter();
	const dispatch = useDispatch();

	const { setIsShoppingList } = props;
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

	const UI = itemInfo && (
		<ItemInfoContainerS>
			<Button
				variant="text"
				color="primary"
				size="sm"
				startIcon="keyboard_backspace"
				iconVariant="round"
				noPadding
				onClick={(e) => {
					e.preventDefault();

					router.replace({});

					setIsShoppingList();
				}}
			>
				back
			</Button>

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
									category: itemInfo.category,
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
