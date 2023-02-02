import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://51.250.8.47:8080/one-to-one/api/v1',
});

export const apiSlice = createApi({
	tagTypes: ['Questions', 'Technologies', 'OneToOne', 'User'],
	baseQuery,
	endpoints: (builder) => ({}),
});
