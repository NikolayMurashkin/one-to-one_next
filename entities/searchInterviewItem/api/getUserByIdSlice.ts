import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IGetUserByIdState {
	id: number | null;
	email: string | null;
	name: string | null;
	surName: string | null;
}

const initialState: IGetUserByIdState = {
	id: null,
	email: null,
	name: null,
	surName: null,
};

const getUserByIdSlice = createSlice({
	name: 'technology',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<IGetUserByIdState>) {
			state.id = action.payload.id;
			state.name = action.payload.name;
			state.surName = action.payload.surName;
			state.email = action.payload.email;
		},
	},
});
export const { setUser } = getUserByIdSlice.actions;
export default getUserByIdSlice.reducer;
