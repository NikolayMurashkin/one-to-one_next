import { apiSlice } from '@shared/api';

export interface IInterviewItem {
	id: number;
	initiatorId: number;
	opponentId: number | null;
	technology: {
		id: number;
		name: string;
	};
	dateTime: string;
	status: string;
	comment: string;
	level: string;
}

export interface IInterviewResponse {
	totalItems: number;
	items: IInterviewItem[];
}

export const getAllInterviewsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllInterviews: builder.query<IInterviewResponse, void>({
			query: () => `/one-to-one?size=50&search=status:OPEN`,
			providesTags: (result) =>
				result
					? [
							...result.items.map(({ id }) => ({
								type: 'Interview' as const,
								id,
							})),
							{ type: 'Interview', id: 'InterviewList' },
					  ]
					: [{ type: 'Interview', id: 'InterviewList' }],
		}),
	}),
});

export const { useGetAllInterviewsQuery } = getAllInterviewsApiSlice;
