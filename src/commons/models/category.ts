import { schema } from "normalizr";

export interface ICategory {
  id: string;
  parentId: string | null;
  userId: string;
  name: string;
  isIncome: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}

export interface ICategoryWithRelations extends ICategory {
  Parent?: ICategory;
  Children?: ICategory[];
  // User?: IUser;
}

export interface ICategoryNormalized extends ICategory {
  Parent?: string;
  Children?: string[];
}

export const categorySchemaKey = "category";
export const categoryChildrenSchemaKey = "categoryChildren";

export const categoryChildrenSchema = new schema.Entity(
  categoryChildrenSchemaKey
);
export const categorySchema = new schema.Entity(categorySchemaKey, {
  ["Children"]: [categoryChildrenSchema],
});

export const categoryListSchema = [categorySchema];
