import { createSlice } from '@reduxjs/toolkit';

export interface IRating {
	value: number;
}

const initialState: IRating = {
	value: 0,
};

const ratingSlice = createSlice({
	name: 'rating',
	initialState,
	reducers: {
		setRating(state, action) {
			state.value = action.payload;
		},
	},
});
export const { setRating } = ratingSlice.actions;
export default ratingSlice.reducer;
