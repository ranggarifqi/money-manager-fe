import { schema } from "normalizr";
import { EAccountType } from "./accountType";

export interface IAccount {
  id: string;
  accountTypeName: EAccountType;
  userId: string;
  name: string;
  balance: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}

export const accountSchemaKey = "accounts";
export const accountSchema = new schema.Entity(accountSchemaKey);
export const accountListSchema = [accountSchema];
