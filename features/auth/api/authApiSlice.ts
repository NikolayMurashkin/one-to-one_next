import { apiSlice } from '@shared/api';

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: '/auth/jwt',
				method: 'POST',
				body: { ...credentials },
			}),
		}),
	}),
});

export const { useLoginMutation } = authApiSlice;
