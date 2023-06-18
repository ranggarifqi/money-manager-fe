import { Dialog, DialogBody, DialogFooter } from "@blueprintjs/core";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../../hooks/useAppSelector";
import {
  sltActiveModal,
  sltModalProps,
} from "../../../../store/modal/selectors";
import { ModalType } from "../interfaces";
import { closeModal } from "../../../../store/modal/slice";
import RippleButton from "../../RippleButton";
import TextInput from "../../form/TextInput";
import Spacer from "../../Spacer";
import { useState } from "react";

export interface AccountDeletionConfirmationProps {
  accountId: string;
  accountName: string;
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
  const props = useAppSelector(sltModalProps);

  const [accountNameConfirm, setAccountNameConfirm] = useState("");

  if (!isCorrectProp(props)) {
    return <></>;
  }

  return (
    <Dialog
      isOpen={activeModal === ModalType.ACCOUNT_DELETION_CONFIRMATION}
      title="Account Deletion Confirmation"
      onClose={() => dispatch(closeModal())}
    >
      <DialogBody>
        <div>
          <p>You're going to delete this account.</p>
          <p>This action can't be undone!</p>
        </div>
        <Spacer height={20} />
        <div>
          <p>Please type the account name to continue this operation</p>
          <TextInput
            placeholder={props.accountName}
            value={accountNameConfirm}
            onChange={(e) => setAccountNameConfirm(e.target.value)}
          />
        </div>
      </DialogBody>
      <DialogFooter
        actions={
          <div className="flex gap-x-2">
            <RippleButton bgColor="info" onClick={() => dispatch(closeModal())}>
              Cancel
            </RippleButton>
            <RippleButton
              bgColor="danger"
              isDisabled={accountNameConfirm !== props.accountName}
            >
              Delete
            </RippleButton>
          </div>
        }
      ></DialogFooter>
    </Dialog>
  );
};

export default AccountDeletionConfirmationModal;
