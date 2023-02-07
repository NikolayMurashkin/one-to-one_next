import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@app/store';
import { IAuthSlice } from '@features/auth/model/authSliceTypes';

const initialState: IAuthSlice = { user: null, token: null };

const registerSlice = createSlice({
	name: 'register',
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			const { user, accessToken } = action.payload;
			state.user = user;
			state.token = accessToken;
		},
		logOut: (state, action) => {
			state.user = null;
			state.token = null;
		},
	},
});

export const { setCredentials, logOut } = registerSlice.actions;

export default registerSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
