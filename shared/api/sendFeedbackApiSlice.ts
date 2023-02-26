import { apiSlice } from '@shared/api';

export const sendFeedbackApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		sendFeedback: builder.mutation({
			query: ({ body }) => ({
				url: '/user/one-to-one/feedback/create',
				method: 'POST',
				body,
				headers: {
					'Content-type': 'application/json',
				},
			}),
		}),
	}),
});

export const { useSendFeedbackMutation } = sendFeedbackApiSlice;









