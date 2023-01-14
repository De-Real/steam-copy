import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import filterParametersReducer from './filterParametersSlice';
import likedListReducer from './likedListSlice';
// import productReducer from './productSlice';

export const store = configureStore({
	reducer: {
		filterParams: filterParametersReducer,
		// products: productReducer,
		likedList: likedListReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
