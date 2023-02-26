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
export interface ICreateInterview {
	initiatorId: number;
	technologyId: number | undefined;
	dateTime: string | undefined;
	comment: string;
	levelId: number | undefined;
};

export const createInterviewApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createInterview: builder.mutation<IInterviewItem, ICreateInterview>({
			query: (body) => ({
				url: `/one-to-one`,
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'Interview', id: 'InterviewList' }],
		}),
	}),
});

export const { useCreateInterviewMutation } = createInterviewApiSlice;
