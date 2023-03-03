import { apiSlice } from '@shared/api/apiSlice';

export interface IGetUserStatistics {
	id: number;
	user: {
		id: number;
		login: string;
		email: string;
		name: string;
		surName: string;
	};
	totalOneToOneCount: number;
	totalQuestionCount: number;
	totalPoint: number;
}

export const interviewInfoApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getUserStatistics: builder.query<
			IGetUserStatistics,
			number | undefined
		>({
			query: (userId) => `/user/one-to-one/feedback/${userId}/statistics`,
			providesTags: ['User'],
		}),
	}),
});

export const { useGetUserStatisticsQuery } = interviewInfoApiSlice;
