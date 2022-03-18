export default function fetchFunction(method, url, model) {
	let options = {};
	let okStatus = 200;
	switch (method) {
		case "get":
			options = {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			};
			break;

		case "post":
			options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(model),
			};
			okStatus = 201;
			break;

		case "delete":
			options = {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			};
			break;

		case "patch":
			options = {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(model),
			};
			break;

		default:
			options = {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			};
			break;
	}

	try {
		const data = fetch(`${process.env.REACT_APP_API_URL}${url}`, options)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Something went wrong!");
				}
				return response.json();
			})
			.then((data) => {
				return data;
			});
		return data;
	} catch (error) {
		return "fail";
	}
}
