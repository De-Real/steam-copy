import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

type orderFilterType = 'lowerToBigger' | 'biggerToLower' | 'none';

interface SearchingParameters {
	searchingValue: string;
	orderFilterValue: string;
	droppableFilterValue: orderFilterType;
}

const initialState: SearchingParameters = {
	searchingValue: '',
	orderFilterValue: 'none',
	droppableFilterValue: 'none',
}

const filterParametersSlice = createSlice({
	name: "filterParameters",
	initialState,
	reducers: {
		changeSearchingValue: (state, action: PayloadAction<string>) => {
			state.searchingValue = action.payload;
		},
		changeOrderFilterValue: (state, action: PayloadAction<string>) => {
			state.orderFilterValue = action.payload;
		},

		changeDroppableFilterValue: (state, action: PayloadAction<orderFilterType>) => {
			state.droppableFilterValue = action.payload;
		}
	},
});

export const filterParametersActions = filterParametersSlice.actions;
export default filterParametersSlice.reducer;