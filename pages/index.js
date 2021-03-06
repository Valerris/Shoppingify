import { useReducer } from "react";
import PageContainer from "common/PageContainer";
import Toolbar from "common/Toolbar";
import Aside from "common/Aside";
import H1 from "common/H1";
import Menu from "features/Menu";
import CartCounter from "features/CartCounter";
import SearchForm from "features/SearchForm";
import MainList from "features/MainList";
import Banner from "features/Banner";
import ShoppingList from "features/ShoppingList";
import ShoppingListForm from "features/ShoppingListForm";
import AddItemForm from "features/AddItemForm";
import ItemInfo from "features/ItemInfo";
import Logo from "components/Logo";

import init from "pages/reducer/init";
import types from "pages/reducer/actionTypes";
import reducer from "pages/reducer/reducer";

export default function Home() {
	const [state, dispatch] = useReducer(reducer, init);

	return (
		<>
			<Toolbar>
				<Logo />

				<Menu />

				<CartCounter />
			</Toolbar>

			<PageContainer pageTitle="Shoppingify">
				<header>
					<H1>
						<span className="colored_span">Shoppingify</span> allows
						you take your shopping list wherever you go
					</H1>

					<SearchForm />
				</header>
				<main>
					<MainList
						setIsItemInfo={(e) => {
							dispatch({ type: types.ITEM_INFO_VISIBLE });
						}}
						setIsShoppingList={(e) => {
							dispatch();
						}}
					/>
				</main>
			</PageContainer>

			<Aside>
				{state.isAddItemVisible ? (
					<div>
						<AddItemForm
							setIsShoppingList={(e) => {
								dispatch();
							}}
						/>
					</div>
				) : state.isItemInfoVisible ? (
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
}
