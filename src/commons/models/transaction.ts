import { IAccount } from "./account";
import { ETransactionType } from "./transactionType";

export interface ITransaction {
  id: string;
  userId: string;
  categoryId: string | null;
  fromAccountId: string | null;
  toAccountId: string | null;
  transactionName: string | null;
  transactionTypeName: ETransactionType;
  date: string;
  amount: number;
  note: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ITransactionWithAssociation extends ITransaction {
  FromAccount?: IAccount | null;
  ToAccount?: IAccount | null;
  // Category?: ICategory | null;
}
