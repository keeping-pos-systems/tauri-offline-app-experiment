export const employeeHttpRepository = {
	async addNew(values: object) {
		console.log(values);
		const response = await fetch("http://localhost:8080/add-new-employee", {
			method: "POST",
			body: JSON.stringify(values),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const json = await response.json();
		console.log({ json });
	},
};
