import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import filterParametersReducer from './filterParametersSlice';

export const store = configureStore({
	reducer: {
		filterParams: filterParametersReducer,
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
