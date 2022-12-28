import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001/',
		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth.userToken
			if (token) {
				headers.set('authorization', `Bearer ${token}`)
				return headers
			}
		},
	}),
	endpoints: (build) => ({
		getDetails: build.query({
			query: () => ({}),
		}),
	}),
})

// export react hook
export const { useGetDetailsQuery } = authApi
