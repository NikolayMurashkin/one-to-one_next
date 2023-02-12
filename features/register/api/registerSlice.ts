import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@app/store';
import { IAuthSlice } from '@features/auth/model/authSliceTypes';

const initialState: IAuthSlice = { email: null, token: null };

const registerSlice = createSlice({
	name: 'register',
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			const { user, accessToken } = action.payload;
			state.email = user;
			state.token = accessToken;
		},
		logOut: (state, action) => {
			state.email = null;
			state.token = null;
		},
	},
});

export const { setCredentials, logOut } = registerSlice.actions;

export default registerSlice.reducer;

export const selectCurrentUserEmail = (state: RootState) => state.auth.email;
export const selectCurrentToken = (state: RootState) => state.auth.token;
