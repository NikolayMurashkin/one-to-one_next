import { apiSlice } from '@shared/api';

export interface IRatingUser {
	id: number;
	user: {
		id: number;
		email: string;
		name: string;
		surName: string;
		status: string;
	};
	totalOneToOneCount: number;
	totalQuestionCount: number;
	totalPoint: number;
}

export interface IRatingResponse {
	totalItems: number;
	items: IRatingUser[];
}

export const getRatingApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getRating: builder.query<IRatingResponse, void>({
			query: () => `/statistics/?size=1500`,
			providesTags: (result) =>
				result
					? [
							...result.items.map(({ id }) => ({
								type: 'Rating' as const,
								id,
							})),
							{ type: 'Rating', id: 'Rating' },
					  ]
					: [{ type: 'Rating', id: 'Rating' }],
		}),
	}),
});

export const { useGetRatingQuery } = getRatingApiSlice;
