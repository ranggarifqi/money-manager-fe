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
