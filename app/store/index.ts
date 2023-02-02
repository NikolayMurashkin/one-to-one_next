import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { apiSlice } from '@shared/api/apiSlice';
import getUserByIdSlice from '@entities/interviewItem/api/getUserByIdSlice';
import setInterviewItemSlice from '@entities/interviewItem/api/setInterviewItemSlice';
import myQquestionsSlice from '@features/myQuestions/api/myQquestionsSlice';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		interviewItem: setInterviewItemSlice,
		user: getUserByIdSlice,
		myQuestions: myQquestionsSlice,
	},
	middleware: (getDefaultMiddlware) =>
		getDefaultMiddlware().concat(apiSlice.middleware),
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
