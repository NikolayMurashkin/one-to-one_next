import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { apiSlice } from '@shared/api/apiSlice';
import getUserByIdSlice from '@entities/myInterviewItem/api/getUserByIdSlice';
import setInterviewItemSlice from '@entities/myInterviewItem/api/setInterviewItemSlice';
import myQquestionsSlice from '@features/myQuestions/api/myQquestionsSlice';
import authReducer from '@features/auth/api/authSlice';
import ratingReducer from '@entities/rating/api/ratingSlice';
import technologyReducer from '@entities/technology/api/technologySlice';
import levelReducer from '@shared/ui/level/levelSlice';
import tabsReducer from '@features/tabs/api/tabsSlice';
import setQuestionReducer from '@entities/sessionWindowQuestion/api/setQuestionSlice';
import acceptQuestionReducer from '@entities/sessionWindowQuestion/api/acceptQuestionSlice';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		interviewItem: setInterviewItemSlice,
		user: getUserByIdSlice,
		myQuestions: myQquestionsSlice,
		auth: authReducer,
		rating: ratingReducer,
		technology: technologyReducer,
		level: levelReducer,
		tabs: tabsReducer,
		setQuestion: setQuestionReducer,
		acceptQuestion: acceptQuestionReducer,
	},
	middleware: (getDefaultMiddlware) =>
		getDefaultMiddlware().concat(apiSlice.middleware),
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
