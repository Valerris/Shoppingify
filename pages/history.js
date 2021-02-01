import { useReducer } from "react";
import PageContainer from "common/PageContainer";
import Toolbar from "common/Toolbar";
import Aside from "common/Aside";
import H1 from "common/H1";
import Menu from "features/Menu";
import CartCounter from "features/CartCounter";
import Banner from "features/Banner";
import ShoppingList from "features/ShoppingList";
import ShoppingListForm from "features/ShoppingListForm";
import AddItemForm from "features/AddItemForm";
import ItemInfo from "features/ItemInfo";
import ShoppingListHistory from "features/ShoppingListHistory";
import ShoppingListHistoryItem from "features/ShoppingListHistoryItem";
import Logo from "components/Logo";
import GoBack from "components/GoBack";

import init from "pages/reducer/init";
import types from "pages/reducer/actionTypes";
import reducer from "pages/reducer/reducer";

export default function HistoryPage() {
	// < hooks >
	const [
		{
			isAddItemVisible,
			isItemInfoVisible,
			isHistoryListVisible,
			isHistoryItemInfoVisible,
		},
		dispatch,
	] = useReducer(reducer, init);
	// </ hooks >

	// < UI >
	const UI = (
		<>
			<Toolbar>
				<Logo />

				<Menu />

				<CartCounter />
			</Toolbar>

			<PageContainer pageTitle="Shoppingify">
				{isHistoryItemInfoVisible && (
					<GoBack
						onClick={() => {
							dispatch({ type: types.HISTORY_LIST_VISIBLE });
						}}
					/>
				)}

				{isHistoryListVisible && (
					<header>
						<H1>Shopping history</H1>
					</header>
				)}
				<main>
					{isHistoryListVisible && (
						<ShoppingListHistory
							setIsHistoryItemInfo={(e) => {
								dispatch({ type: types.HISTORY_ITEM_INFO_VISIBLE });
							}}
						/>
					)}

					{isHistoryItemInfoVisible && <ShoppingListHistoryItem />}
				</main>
			</PageContainer>

			<Aside>
				{isAddItemVisible ? (
					<div>
						<AddItemForm
							setIsShoppingList={(e) => {
								dispatch();
							}}
						/>
					</div>
				) : isItemInfoVisible ? (
					<div>
						<ItemInfo
							setIsShoppingList={(e) => {
								dispatch();
							}}
						/>
					</div>
				) : (
					<>
						<div>
							<Banner
								setIsAddItemForm={(e) => {
									dispatch({ type: types.ADD_ITEM_VISIBLE });
								}}
							/>

							<ShoppingList />
						</div>

						<ShoppingListForm />
					</>
				)}
			</Aside>
		</>
	);

	return UI;
}
