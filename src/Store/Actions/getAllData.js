export const GET_DATA = "GET_DATA";
export const getData = (field) => {
	return { type: GET_DATA, field };
};
