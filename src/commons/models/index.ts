import { Dict } from "styled-components/dist/types";
import { IAccount, accountSchemaKey } from "./account";
import { ICategory, categorySchemaKey } from "./category";

export interface CompleteNormalizedEntities {
  [accountSchemaKey]?: Dict<IAccount>;
  [categorySchemaKey]?: Dict<ICategory>;
}
