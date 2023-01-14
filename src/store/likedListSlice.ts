import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface InitialStateInterface {
	likedList: string[];
}

let likedListArray: string[] = [];

if (localStorage.likedItems) {
	likedListArray = JSON.parse(localStorage.likedItems);
}

const updateItems = (arr: string[]) => {
	localStorage.setItem('likedItems', JSON.stringify(arr));
}

const initialState: InitialStateInterface = {
	likedList: likedListArray,
}

const likedListSlice = createSlice({
	name: "likedList",
	initialState,
	reducers: {
		addLikedItem: (state, action: PayloadAction<string>) => {
			state.likedList.push(action.payload);
			updateItems(state.likedList);
		},
		removeLikedItem: (state, action: PayloadAction<string>) => {
			state.likedList = state.likedList.filter((item) => {
				console.log(item, action.payload);
				return item !== action.payload
			})
			updateItems(state.likedList);
		}
	},
});

export const likedListActions = likedListSlice.actions;
export default likedListSlice.reducer;