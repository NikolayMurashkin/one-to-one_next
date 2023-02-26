import { apiSlice } from '@shared/api/apiSlice';
import {
	IGetFeedbackRequestBody,
	IGetFeedbackResponse,
} from '../model/feedbackApiSliceTypes';

export const feedbackApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getFeedback: builder.query<
			IGetFeedbackResponse,
			IGetFeedbackRequestBody
		>({
			query: (body) =>
				`/user/one-to-one/feedback/${body.userId}/${body.interviewId}`,
			providesTags: ['Questions'],
		}),
	}),
});

export const { useGetFeedbackQuery } = feedbackApiSlice;
