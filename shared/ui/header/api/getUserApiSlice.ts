import { apiSlice } from '@shared/api/apiSlice';

interface IGetUserByIdResponse {
	id: number;
	email: string;
	name: string;
	surName: string;
}

export const getUserApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getUser: builder.query<IGetUserByIdResponse, number | undefined>({
			query: (id) => id ? `/user/${id}` : '',
			providesTags: ['User'],
		}),
	}),
});

export const { useGetUserQuery } = getUserApiSlice;
