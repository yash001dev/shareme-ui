import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://webcodingcenter.com/shared/"
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPost: builder.query({
      query: (id) => `get_post.php?id=${id}`, // expects a JSON response
      providesTags: (result, error, id) => [{ type: "Posts", id }]
    }),
    updatePost: builder.mutation({
      query: (body) => {
        console.log("body", body);
        return {
          url: `update_post.php`,
          method: "POST",
          body
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Posts", id }]
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostQuery, useUpdatePostMutation } = postApi;
