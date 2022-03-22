import { DELETE_FROM_STORE } from "../Actions/deleteFromStore";
import { SET_STORE } from "../Actions/setStore";

const dataReducer = (
	state = {
		categories: [],
		deletedCategories: [],
		authors: [],
		deletedAuthors: [],
		books: [],
		deletedBooks: [],
	},
	action
) => {
	switch (action.type) {
		case SET_STORE:
			return { ...state, ...action.fields };

		case DELETE_FROM_STORE:
			let tempState = { ...state };
			switch (action.field) {
				case "categories":
					tempState.deletedCategories.push(action.id);
				case "books":
					tempState.deletedBooks.push(action.id);
				case "authors":
					tempState.deletedAuthors.push(action.id);
				default:
					break;
			}
			console.log(tempState);
			return tempState;

		default:
			return state;
	}
};
export default dataReducer;
