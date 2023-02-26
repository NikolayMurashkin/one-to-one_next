import { apiSlice } from '@shared/api/apiSlice';



export const closeSessionApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		closeSession: builder.mutation({
			query: (body) => ({
				url: `/one-to-one/${body.interviewId}/close`,
				method: 'PUT',
				body: {
					authorId: body.authorId,
					opponentId: body.opponentId
				}
			}),
		}),
	}),
});

export const { useCloseSessionMutation } = closeSessionApiSlice;
