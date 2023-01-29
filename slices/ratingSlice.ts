import { createSlice } from '@reduxjs/toolkit';
import { IRating } from '../redux';

const initialState: IRating = {
	value: 0,
};

const ratingSlice = createSlice({
	name: 'technology',
	initialState,
	reducers: {
		setRating(state, action) {
			state.value = action.payload;
		},
	},
});
export const { setRating } = ratingSlice.actions;
export default ratingSlice.reducer;
