import { apiSlice } from "../api/apiSlice";

export const notificationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllNotifications: builder.query({
      query: () => ({
        url:"http://localhost:8000/api/v1/get-all-notificationss",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    updateNotificationStatus: builder.mutation({
      query: (id) => ({
        url: `http://localhost:8000/api/v1/update-notifications/${id}`,
        method: "PUT",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useGetAllNotificationsQuery, useUpdateNotificationStatusMutation } =
  notificationsApi;
