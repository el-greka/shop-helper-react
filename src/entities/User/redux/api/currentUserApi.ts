import { api } from "app/redux";

const currentUserApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchCurrentUser: builder.query({
      query: () => ({
        url: "/api/users/my/profile",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    updateCurrentUser: builder.mutation({
      query: user => ({
        url: `/api/users/${user.id}`,
        method: "PUT",
        body: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
        },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useFetchCurrentUserQuery, useUpdateCurrentUserMutation } =
  currentUserApi;
