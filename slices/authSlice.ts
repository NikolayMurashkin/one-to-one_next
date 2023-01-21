import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthSlice, Payload, User } from '../redux/types';

// export const checkAuth = createAsyncThunk('auth/cheackAuth', async () => {
// 	try {
// 		console.log(response);
// 		const response = await axios(
// 			`https://jsonplaceholder.typicode.com/posts`,
// 			{
// 				withCredentials: true,
// 			}
// 		);
// 		localStorage.setItem('token', 'qwerty');
// 	} catch (e) {
// 		console.log(e.response?.data?.message);
// 	} finally {
// 		state.isLoading(false);
// 	}
// });

const initialState: AuthSlice = {
	user: null,
	isAuth: false,
	isLoading: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<User>) {
			state.isAuth = true;
			state.user = action.payload.user;
			// localStorage.setItem('token', action.payload.accessToken);
		},
		logout(state) {
			state.isAuth = false;
			state.user = null;
		},
		checkAuth(state, action) {
			state.isLoading = true;
			localStorage.setItem('token', action.payload);
			state.isAuth = true;
			state.isLoading = false;
		},
	},
});

export const { setUser, logout, checkAuth } = authSlice.actions;
export default authSlice.reducer;
