import { apiSlice } from '@shared/api';

export interface ITechnology {
	id?: number;
	name: string;
}

export interface ITechnologyResponse {
	totalItems: number;
	items: ITechnology[];
};

export const technologyApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTechnologies: builder.query<ITechnologyResponse, void>({
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
	}),
});

export const { useGetTechnologiesQuery } = technologyApiSlice;
