import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
	GetAllQuestionResponse,
	IQuestion,
	UpdateQuestion,
	AddQuestion,
	TechnologyResponse,
	ITechnology,
	AddTechnology,
	OnetoOneResponse,
	AcceptOneToOne,
	IOneToOne,
	CloseOneToOne,
	CreateOneToOne,
	QuestionRequest,
} from './types';

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Questions', 'Technologies', 'OneToOne'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://51.250.8.47:8080/one-to-one/api/v1',
	}),
	endpoints: (builder) => ({
		getAllQuestions: builder.query<GetAllQuestionResponse, number>({
			query: (userid) => `/user/${userid}/question`,
			providesTags: (result) =>
				result
					? [
							...result.items.map(({ id }) => ({
								type: 'Questions' as const,
								id,
							})),
							{ type: 'Questions', id: 'QuestionsList' },
					  ]
					: [{ type: 'Questions', id: 'QuestionsList' }],
		}),
		// getQuestionsById: builder.query<IQuestion, QuestionRequest>({
		// 	query: ({ userid, id }) => `/user/${userid}/question/${id}`,
		// 	providesTags: ['Questions'],
		// }),
		// updateQuestion: builder.mutation<IQuestion, UpdateQuestion>({
		// 	query: (body) => ({
		// 		url: `/user/${body.userId}/question/${body.questionId}`,
		// 		method: 'PUT',
		// 		body,
		// 	}),
		// 	invalidatesTags: [{ type: 'Questions', id: 'QuestionsList' }],
		// }),
		addQuestions: builder.mutation<IQuestion, AddQuestion>({
			query: (body) => ({
				url: `/user/${body.userId}/question/create`,
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'Questions', id: 'QuestionsList' }],
		}),
		getTechnologies: builder.query<TechnologyResponse, void>({
			query: () => `/technology?size=50`,
			providesTags: (result) =>
				result
					? [
							...result.items.map(({ id }) => ({
								type: 'Technologies' as const,
								id,
							})),
							{ type: 'Technologies', id: 'TechnologiesList' },
					  ]
					: [{ type: 'Technologies', id: 'TechnologiesList' }],
		}),
		addTechnology: builder.mutation<ITechnology, AddTechnology>({
			query: (body) => ({
				url: `/technology`,
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'Technologies', id: 'TechnologiesList' }],
		}),
		getMyOneToOne: builder.query<OnetoOneResponse, void>({
			query: () => `/one-to-one?size=50`,
			providesTags: (result) =>
				result
					? [
							...result.items.map(({ id }) => ({
								type: 'OneToOne' as const,
								id,
							})),
							{ type: 'OneToOne', id: 'OneToOneList' },
					  ]
					: [{ type: 'OneToOne', id: 'OneToOneList' }],
		}),
		getAllOneToOne: builder.query<OnetoOneResponse, void>({
			query: () => `/one-to-one?size=50&search=status:OPEN`,
			providesTags: (result) =>
				result
					? [
							...result.items.map(({ id }) => ({
								type: 'OneToOne' as const,
								id,
							})),
							{ type: 'OneToOne', id: 'OneToOneList' },
					  ]
					: [{ type: 'OneToOne', id: 'OneToOneList' }],
		}),
		acceptOneToOne: builder.mutation<IOneToOne, AcceptOneToOne>({
			query: (body) => ({
				url: `/one-to-one`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: [{ type: 'OneToOne', id: 'OneToOneList' }],
		}),
		closeOneToOne: builder.mutation<IOneToOne, CloseOneToOne>({
			query: ({ body, oneToOneId }) => ({
				url: `/one-to-one/${oneToOneId}/close`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: [{ type: 'OneToOne', id: 'OneToOneList' }],
		}),
		createOneToOne: builder.mutation<IOneToOne, CreateOneToOne>({
			query: (body) => ({
				url: `/one-to-one`,
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'OneToOne', id: 'OneToOneList' }],
		}),
	}),
});

export const {
	useGetAllQuestionsQuery,
	// useGetQuestionsByIdQuery,
	// useUpdateQuestionMutation,
	useAddQuestionsMutation,
	useGetTechnologiesQuery,
	useAddTechnologyMutation,
	useGetAllOneToOneQuery,
	useAcceptOneToOneMutation,
	useCloseOneToOneMutation,
	useCreateOneToOneMutation,
	useGetMyOneToOneQuery
} = api;
