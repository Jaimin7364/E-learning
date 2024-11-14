import { apiSlice } from "../api/apiSlice";

export const layoutApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHeroData: builder.query({
      query: (type) => ({
        url:  "http://localhost:8000/api/v1/" + `get-layout/${type}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    editLayout: builder.mutation({
      query: ({ type, image, title, subtitle, faq, categories }) => ({
        url: `edit-layout`,
        body: { type, image, title, subtitle, faq, categories },
        method: "PUT",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useGetHeroDataQuery, useEditLayoutMutation } = layoutApi;
