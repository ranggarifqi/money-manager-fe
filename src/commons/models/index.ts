import { Dict } from "styled-components/dist/types";
import { IAccount, accountSchemaKey } from "./account";

export interface CompleteNormalizedEntities {
  [accountSchemaKey]?: Dict<IAccount>;
}
