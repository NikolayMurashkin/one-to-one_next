import { apiSlice } from '@shared/api';

export const registerApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (credentials) => ({
				url: '/auth/jwt',
				method: 'POST',
				body: { ...credentials },
			}),
		}),
	}),
});

export const { useRegisterMutation } = registerApiSlice;
