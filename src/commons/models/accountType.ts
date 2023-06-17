export enum EAccountType {
  RECEIVABLES = "Receivables",
  SAVINGS = "Savings",
  INVESTMENTS = "Investments",
  CASH = "Cash",
  LOANS = "Loans",
  PREPAID = "Prepaid",
  OTHERS = "Others",
  OVERDRAFTS = "Overdrafts",
}

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
