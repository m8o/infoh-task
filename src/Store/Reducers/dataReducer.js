import fetchFunction from "../../Services/fetchFunction";
import { GET_DATA } from "../Actions/getAllData";
const getDataFunc = async (actionField) => {
	let response;
	if (actionField === "all") {
		const category = await fetchFunction("get", "category").then(
			(data) => data.data
		);
		const author = await fetchFunction("get", "author").then(
			(data) => data.data
		);
		const book = await fetchFunction("get", "book").then((data) => data.data);
		response = { category, author, book };
	}
	response = await fetchFunction("get", actionField).then((data) => data.data);
	return response;
};
const dataReducer = (
	state = { category: [], author: [], book: [] },
	action
) => {
	switch (action.type) {
		case GET_DATA:
			getDataFunc(action.field);
			return { ...state };
		default:
			return state;
	}
};
export default dataReducer;
