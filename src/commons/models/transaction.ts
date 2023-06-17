import { IAccount } from "./account";
import { ETransactionType } from "./transactionType";

export interface ITransaction {
  id: string;
  userId: string;
  categoryId: string | null;
  fromAccountId: string | null;
  toAccountId: string | null;
  transactionTypeName: ETransactionType;
  date: Date;
  amount: number;
  note: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITransactionWithAssociation extends ITransaction {
  FromAccount?: IAccount | null;
  ToAccount?: IAccount | null;
  // Category?: ICategory | null;
}
