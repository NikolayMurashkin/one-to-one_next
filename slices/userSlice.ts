import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../redux';

const initialState: IUser = {
	id: 1,
	login: '',
	email: '',
	name: '',
	surName: '',
};

const userSlice = createSlice({
	name: 'technology',
	initialState,
	reducers: {
		setUser(state, action) {
			state.id = action.payload.id;
			state.login = action.payload.login;
			state.email = action.payload.email;
			state.name = action.payload.name;
			state.surName = action.payload.surName;
		},
	},
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
