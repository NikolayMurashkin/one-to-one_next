import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@app/store';
import { IAuthSlice } from '@features/auth/model/authSliceTypes';

const initialState: IAuthSlice = { user: null, token: null };

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			console.log(action.payload);
			// const { user, accessToken } = action.payload;
			state.user = action.payload;
			// state.token = accessToken;
		},
		logOut: (state) => {
			state.user = null;
			state.token = null;
		},
	},
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
