import AccountDeletionConfirmationModal, {
  AccountDeletionConfirmationProps,
} from "./types/AccountDeletionConfirmationModal";
import CategoryDeletionConfirmationModal, {
  CategoryDeletionConfirmationProps,
} from "./types/CategoryDeletionConfirmationModal";

export enum ModalType {
  ACCOUNT_DELETION_CONFIRMATION = "ACCOUNT_DELETION_CONFIRMATION",
  CATEGORY_DELETION_CONFIRMATION = "CATEGORY_DELETION_CONFIRMATION",
}

interface ModalMapping {
  type: ModalType;
  component: () => JSX.Element;
}

export const modalMapping: ModalMapping[] = [
  {
    type: ModalType.ACCOUNT_DELETION_CONFIRMATION,
    component: AccountDeletionConfirmationModal,
  },
  {
    type: ModalType.CATEGORY_DELETION_CONFIRMATION,
    component: CategoryDeletionConfirmationModal,
  },
];

export type ModalProps =
  | AccountDeletionConfirmationProps
  | CategoryDeletionConfirmationProps;
