import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/constants';

export const colorsApi = createApi({
  reducerPath: 'colorsApi',
  tagTypes: ['Colors'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getColors: build.query({
      query: () => `colors`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Colors', id })), { type: 'Colors', id: 'LIST' }]
          : [{ type: 'Colors', id: 'LIST' }],
    }),
  }),
});

export const { useGetColorsQuery } = colorsApi;
