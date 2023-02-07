// import getUserByIdSlice from '@entities/interviewItem/api/getUserByIdSlice';
// import setInterviewItemSlice from '@entities/interviewItem/api/setInterviewItemSlice';
// import myQquestionsSlice from '@features/myQuestions/api/myQquestionsSlice';
// import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
// import acceptedQuestionsSlice from '../slices/acceptedQuestionsSlice';
// import levelSlice from '../slices/levelSlice';
// import questionsSlice from '../slices/questionsSlice';
// import ratingSlice from '../slices/ratingSlice';
// import tabSlice from '../slices/tabSlice';
// import technologySlice from '../slices/technologySlice';

// import { api } from './api';

// export const store = configureStore({
// 	reducer: {
// 		[api.reducerPath]: api.reducer,
// 		tabs: tabSlice,
// 		technology: technologySlice,
// 		level: levelSlice,
// 		questions: questionsSlice,
// 		acceptedQuestions: acceptedQuestionsSlice,
// 		interviewItem: setInterviewItemSlice,
// 		user: getUserByIdSlice,
// 		rating: ratingSlice,
// 		myQuestions: myQquestionsSlice
// 	},
// 	middleware: (getDefaultMiddlware) =>
// 		getDefaultMiddlware().concat(api.middleware),
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// setupListeners(store.dispatch);
