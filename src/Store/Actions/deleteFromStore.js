export const DELETE_FROM_STORE = "DELETE_FROM_STORE";
export const deleteFromStore = (field, id) => {
	return { type: DELETE_FROM_STORE, field, id };
};
