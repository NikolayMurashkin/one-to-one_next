import { createSlice } from '@reduxjs/toolkit';
import { ITechnology } from '../redux';

const initialState: ITechnology = {
	id: 1,
	name: '',
};

const technologySlice = createSlice({
	name: 'technology',
	initialState,
	reducers: {
		setTechnology(state, action) {
			state.id = action.payload.id;
			state.name = action.payload.name;
		},
	},
});
export const { setTechnology } = technologySlice.actions;
export default technologySlice.reducer;
