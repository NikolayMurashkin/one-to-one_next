import { apiSlice } from '@shared/api/apiSlice';

interface IGetUserByIdResponse {
	id: number;
	login: string;
	email: string;
	name: string;
	surName: string;
}

export const interviewItemApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getUserById: builder.query<IGetUserByIdResponse, number | undefined>({
			query: (id) => `/user/${id}`,
			providesTags: ['User'],
		}),
	}),
});

export const { useGetUserByIdQuery } = interviewItemApiSlice;
