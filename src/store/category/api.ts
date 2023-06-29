import { createApi } from "@reduxjs/toolkit/dist/query/react";
import {
  RootErrorResponse,
  SuccessResponse,
  authorizedQuery,
} from "../rootAPI";
import { ICategoryWithRelations } from "../../commons/models/category";

export const categoryAPI = createApi({
  reducerPath: "categoryApi",
  baseQuery: authorizedQuery,
  tagTypes: ["Category"],
  endpoints: (build) => ({
    findCategories: build.query<ICategoryWithRelations[], void>({
      providesTags: ["Category"],
      query: () => {
        return {
          url: `/v1/categories`,
          method: "GET",
          credentials: "include",
        };
      },
      transformResponse: (
        response: SuccessResponse<ICategoryWithRelations[]>
      ) => {
        return response.data;
      },
      transformErrorResponse(baseQueryReturnValue: RootErrorResponse) {
        return baseQueryReturnValue.data;
      },
    }),
  }),
});

export const { useFindCategoriesQuery } = categoryAPI;
