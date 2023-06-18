import AccountDeletionConfirmationModal, {
  AccountDeletionConfirmationProps,
} from "./types/AccountDeletionConfirmationModal";

export enum ModalType {
  ACCOUNT_DELETION_CONFIRMATION = "ACCOUNT_DELETION_CONFIRMATION",
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
];

export type ModalProps = AccountDeletionConfirmationProps;
