import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@app/store';
import { IAuthSlice } from '@features/auth/model/authSliceTypes';

const initialState: IAuthSlice = { email: null, token: null };

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			state.email = action.payload.email;
			state.token = action.payload.jwtToken;
		},
		logOut: (state) => {
			state.email = null;
			state.token = null;
			localStorage.clear();
		},
	},
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUserEmail = (state: RootState) => state.auth.email;
export const selectCurrentToken = (state: RootState) => state.auth.token;
