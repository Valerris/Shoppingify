export function findCategoryObj(target, category) {
	return target.find((el) => el.category.name === category);
}

export function findCategoryIdx(target, category) {
	return target.findIndex((el) => el.category.name === category);
}

export function findItemById(target, id) {
	return target.find((el) => el._id === id);
}
