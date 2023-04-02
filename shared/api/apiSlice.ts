import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

import { setCredentials, logOut } from '@features/auth/api/authSlice';
import { RootState } from '@app/store';

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://51.250.55.231' +
		':8080/one-to-one/api/v1',
	credentials: 'include',
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.token;
		const localStorageToken = localStorage
			.getItem('access')
			?.replaceAll('"', '');

		if (localStorageToken) {
			headers.set('Authorization', `Bearer ${localStorageToken}`);
		} else if (token) {
			headers.set('Authorization', `Bearer ${token}`);
		}
		return headers;
	},
});

interface IRefreshResultResponse {
	email: string;
	id: number;
	jwtToken: string;
}

const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);

	if (result?.error?.status === 401) {
		// console.log(`sending refresh token`);
		//send refresh token to get new access token
		const refreshResult = await baseQuery(
			'/auth/jwt/refresh',
			api,
			extraOptions
		);
		// console.log(refreshResult);
		if (refreshResult?.data) {
			const userEmail = (api.getState() as any).auth.email;
			//store the new token
			const data: IRefreshResultResponse =
				refreshResult.data as IRefreshResultResponse;

			localStorage.setItem('access', JSON.stringify(data.jwtToken));
			api.dispatch(setCredentials({ ...refreshResult.data, userEmail }));
			//retry the original query with new access token
			result = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(logOut());
		}
	}
	return result;
};

export const apiSlice = createApi({
	tagTypes: ['Questions', 'Technologies', 'Interview', 'User', 'Rating'],
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({}),
});
