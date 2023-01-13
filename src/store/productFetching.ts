import { createAsyncThunk } from "@reduxjs/toolkit";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7c5ef87773msh1ba3465dbccadb6p1e9a59jsnbe646dae5f80',
		'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
	}
};

export const loadProducts = createAsyncThunk("products/loadProducts", async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos');

	if (!response.ok) {
		throw new Error("Error");
	}

	const data = await response.json();

	console.log(data);

	return data;
});