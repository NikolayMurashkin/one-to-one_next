import { apiSlice } from '@shared/api';
import { IGetAllInterviewsResponse } from '@features/searchInterviews/model/searchInterviewsTypes';

export interface IUser {
	id: number;
	login: string;
	email: string;
	name: string;
	surName: string;
}

export interface IUserStatisticItem {
	id: number;
	user: {
		id: number;
		user: IUser;
		login: string;
		email: string;
		name: string;
		surName: string;
	};
	technology: {
		id: number;
		name: string;
	};
	questionCount: number;
	totalPoint: number;
}
export interface IGetFullUserStatistics {
	totalItems: number;
	items: IUserStatisticItem[];
}

export const getTechnologyStatisticApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTechnologyStatistics: builder.query<
			IGetFullUserStatistics,
			number | undefined
		>({
			query: (userId) =>
				`/user/one-to-one/feedback/${userId}/technology-statistics`,
			providesTags: ['User'],
		}),
	}),
});

export const { useGetTechnologyStatisticsQuery } =
	getTechnologyStatisticApiSlice;
