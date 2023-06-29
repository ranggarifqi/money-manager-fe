import { Dict } from "styled-components/dist/types";
import { IAccount, accountSchemaKey } from "./account";
import {
  ICategoryNormalized,
  categoryChildrenSchemaKey,
  categorySchemaKey,
} from "./category";

export interface CompleteNormalizedEntities {
  [accountSchemaKey]?: Dict<IAccount>;
  [categorySchemaKey]?: Dict<ICategoryNormalized>;
  [categoryChildrenSchemaKey]?: Dict<ICategoryNormalized>;
}
