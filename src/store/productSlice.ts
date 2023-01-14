export { };

//POTENTIALLY CAN BE USED TO FETCH DATA AND IT WAS INITIALLY CREATED TO DO IT

// import { FetchingData } from './../types/fetchingDataInterface';
// import { loadProducts } from './productFetching';
// import { createSlice } from "@reduxjs/toolkit";

// interface InitialStateInterface {
// 	products: FetchingData[];
// 	status: 'idle' | 'pending' | 'succeeded' | 'failed';
// }

// const initialState: InitialStateInterface = {
// 	products: [],
// 	status: 'idle',
// };

// const productListSlice = createSlice({
// 	name: "products",
// 	initialState,
// 	reducers: {},
// 	// extraReducers:
// 	// 	(builder) => {
// 	// 		builder.addCase(loadProducts.fulfilled, (state, action) => {
// 	// 			state.status = 'succeeded';
// 	// 			console.log(action.payload);
// 	// 			console.log(action.payload);
// 	// 			state.products = action.payload;
// 	// 		});

// 	// 		builder.addCase(loadProducts.pending, (state) => {
// 	// 			state.status = 'pending';
// 	// 		});

// 	// 		builder.addCase(loadProducts.rejected, (state) => {
// 	// 			state.status = 'failed';
// 	// 		});
// 	// 	}

// 	// [loadProducts.fulfilled]: (state, { payload }) => {
// 	// 	state.jobItems = payload || [];
// 	// },

// });

// export const jobListActions = productListSlice.actions;

// export default productListSlice.reducer;