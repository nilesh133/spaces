import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Review {
  id: string;
  name: string;
  review: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://66fbcdd58583ac93b40d4a1f.mockapi.io/react-api/' }),
  endpoints: (builder) => ({
    getCustomerReviews: builder.query<Review[], void>({
      query: () => 'customer-reviews',
    }),
  }),
});

export const { useGetCustomerReviewsQuery } = apiSlice;
