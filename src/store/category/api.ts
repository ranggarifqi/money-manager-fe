import { createApi } from "@reduxjs/toolkit/dist/query/react";
import {
  RootErrorResponse,
  SuccessResponse,
  authorizedQuery,
} from "../rootAPI";
import {
  ICategory,
  ICategoryWithRelations,
} from "../../commons/models/category";
import { stringifyErrorMessage } from "../commons/stringifyErrorMessage";

interface CreateCategoryDTO {
  parentId: string | null;
  name: string;
  isIncome?: boolean | null;
}

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

    createCategory: build.mutation<ICategory, CreateCategoryDTO>({
      invalidatesTags: ["Category"],
      query: (payload) => {
        return {
          url: `/v1/categories`,
          method: "POST",
          body: payload,
          credentials: "include",
        };
      },
      transformResponse(response: SuccessResponse<ICategory>) {
        return response.data;
      },
      transformErrorResponse(baseQueryReturnValue: RootErrorResponse): string {
        return stringifyErrorMessage(baseQueryReturnValue.data.message);
      },
    }),
  }),
});

export const { useFindCategoriesQuery, useCreateCategoryMutation } =
  categoryAPI;
