import { apiSlice } from '@shared/api/apiSlice';

export interface IAcceptinterview{
	opponentId: number;
	oneToOneId: number | undefined;
};
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


export const acceptInterviewApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		acceptInterview: builder.mutation<IInterviewItem, IAcceptinterview>({
			query: (body) => ({
				url: `/one-to-one`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: [{ type: 'Interview', id: 'InterviewList' }],
		}),
	}),
});

export const { useAcceptInterviewMutation } = acceptInterviewApiSlice;
