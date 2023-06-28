import { createApi } from "@reduxjs/toolkit/dist/query/react";
import {
  RootErrorResponse,
  SuccessResponse,
  authorizedQuery,
} from "../rootAPI";
import { CompleteNormalizedEntities } from "../../commons/models";
import { normalize } from "normalizr";
import {
  ICategoryWithRelations,
  categoryListSchema,
} from "../../commons/models/category";

export const categoryAPI = createApi({
  reducerPath: "categoryApi",
  baseQuery: authorizedQuery,
  tagTypes: ["Category"],
  endpoints: (build) => ({
    findCategories: build.query<CompleteNormalizedEntities, void>({
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
        const normalized = normalize(response.data, categoryListSchema);
        return normalized.entities;
      },
      transformErrorResponse(baseQueryReturnValue: RootErrorResponse) {
        return baseQueryReturnValue.data;
      },
    }),
  }),
});

export const { useFindCategoriesQuery } = categoryAPI;
