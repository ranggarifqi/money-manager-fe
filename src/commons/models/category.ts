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

export const categorySchemaKey = "category";
export const categorySchema = new schema.Entity(categorySchemaKey);
export const categoryListSchema = [categorySchema];
