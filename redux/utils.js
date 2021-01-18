export function findCategoryObj(state, category) {
	return state.find((el) => el.category.name === category);
}

export function findCategoryIdx(state, category) {
	return state.findIndex((el) => el.category.name === category);
}

export function findItemById(target, id) {
	return target.find((el) => el._id === id);
}
