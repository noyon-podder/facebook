import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://facebook-server-wheat.vercel.app/api",
  }),
  endpoints: (builder) => ({
    userCreate: builder.mutation({
      query: (userData) => ({
        url: "auth/signup",
        method: "POST",
        body: userData,
      }),
    }),

    getUser: builder.query({
      query: () => ({
        url: "auth/users",
        method: "GET",
      }),
    }),
  }),
});

export const { useUserCreateMutation, useGetUserQuery } = loginApi;
