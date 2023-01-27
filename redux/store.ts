import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import levelSlice from '../slices/levelSlice';
import tabSlice from '../slices/tabSlice';
import technologySlice from '../slices/technologySlice';

import { api } from './api';

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		tabs: tabSlice,
		technology: technologySlice,
		level: levelSlice
	},
	middleware: (getDefaultMiddlware) =>
		getDefaultMiddlware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
