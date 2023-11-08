import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from '../AxiosBaseQuery'

const testApi = createApi({
  reducerPath: 'testApi',
  baseQuery: axiosBaseQuery({
    baseUrl: '/test'
  }),
  tagTypes: ['get', 'post'],
  endpoints: (build) => ({
    testGet: build.query<any, void>({
      query: () => ({ url: '/get', method: 'get' }),
      keepUnusedDataFor: 5,
      providesTags: ['get']
    }),
    testPost: build.mutation<any, void>({
      query: () => ({ url: '/post', method: 'post' }),
      invalidatesTags: ['get']
    })
  })
})

export const { useTestGetQuery, useTestPostMutation } = testApi

export default testApi
