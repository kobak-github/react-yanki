import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/constants';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  tagTypes: ['Categories'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => `categories`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Categories', id })),
              { type: 'Categories', id: 'LIST' },
            ]
          : [{ type: 'Categories', id: 'LIST' }],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
