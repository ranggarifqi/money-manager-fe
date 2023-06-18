import { Dialog, DialogBody } from "@blueprintjs/core";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../../hooks/useAppSelector";
import {
  sltActiveModal,
  sltModalProps,
} from "../../../../store/modal/selectors";
import { ModalType } from "../interfaces";
import { closeModal } from "../../../../store/modal/slice";

export interface AccountDeletionConfirmationProps {
  accountId: string;
}

const isCorrectProp = (
  props: unknown | null
): props is AccountDeletionConfirmationProps => {
  if (props === null) {
    return false;
  }
  return (props as AccountDeletionConfirmationProps).accountId !== undefined;
};

const AccountDeletionConfirmationModal = () => {
  const dispatch = useDispatch();
  const activeModal = useAppSelector(sltActiveModal);
  const props = useAppSelector(
    sltModalProps
  ) as AccountDeletionConfirmationProps;

  if (!isCorrectProp(props)) {
    return;
  }

  return (
    <Dialog
      isOpen={activeModal === ModalType.ACCOUNT_DELETION_CONFIRMATION}
      title="Account Deletion Confirmation"
      onClose={() => dispatch(closeModal())}
    >
      <DialogBody>Hello {props.accountId}</DialogBody>
    </Dialog>
  );
};

export default AccountDeletionConfirmationModal;
