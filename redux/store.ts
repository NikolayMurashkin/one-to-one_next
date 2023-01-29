import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import acceptedQuestionsSlice from '../slices/acceptedQuestionsSlice';
import interviewSlice from '../slices/interviewSlice';
import levelSlice from '../slices/levelSlice';
import questionsSlice from '../slices/questionsSlice';
import ratingSlice from '../slices/ratingSlice';
import tabSlice from '../slices/tabSlice';
import technologySlice from '../slices/technologySlice';

import { api } from './api';

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		tabs: tabSlice,
		technology: technologySlice,
		level: levelSlice,
		questions: questionsSlice,
		acceptedQuestions: acceptedQuestionsSlice,
		interview: interviewSlice,
		rating: ratingSlice
	},
	middleware: (getDefaultMiddlware) =>
		getDefaultMiddlware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
