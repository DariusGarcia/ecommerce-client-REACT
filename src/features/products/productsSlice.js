import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
	endpoints: (build) => ({
		getAllProducts: build.query({
			query: () => ({ url: 'api/product' }),
			transformResponse: (response, meta, arg) => response.data,
			transformErrorResponse: (response, meta, arg) => response.status,
		}),
	}),
})

export const { useGetAllProductsQuery } = productsApi
