import { Dialog, DialogBody, DialogFooter } from "@blueprintjs/core";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../../hooks/useAppSelector";
import {
  sltActiveModal,
  sltModalProps,
} from "../../../../store/modal/selectors";
import { ModalType } from "../interfaces";
import { closeModal } from "../../../../store/modal/slice";
import RippleButton from "../../buttons/RippleButton";
import TextInput from "../../form/TextInput";
import Spacer from "../../Spacer";
import { useEffect, useState } from "react";
import { useDeleteAccountByIdMutation } from "../../../../store/account/api";
import Spinner from "../../Spinner";

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

  const [deleteAccountById, { isLoading, error, isError, isSuccess }] =
    useDeleteAccountByIdMutation();

  useEffect(() => {
    if (activeModal === null) {
      setAccountNameConfirm("");
    }
  }, [activeModal]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(closeModal());
    }
  }, [dispatch, isSuccess]);

  if (!isCorrectProp(props)) {
    return <></>;
  }

  return (
    <Dialog
      isOpen={activeModal === ModalType.ACCOUNT_DELETION_CONFIRMATION}
      title="Account Deletion Confirmation"
      onClose={() => dispatch(closeModal())}
      isCloseButtonShown={!isLoading}
      canOutsideClickClose={!isLoading}
      canEscapeKeyClose={!isLoading}
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
            disabled={isLoading}
          />
        </div>
        {isError && (
          <div>
            <Spacer height={10} />
            <p className="text-danger">{error as string}</p>
          </div>
        )}
      </DialogBody>
      <DialogFooter
        actions={
          <div className="flex gap-x-2">
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <RippleButton
                  bgColor="info"
                  onClick={() => dispatch(closeModal())}
                >
                  Cancel
                </RippleButton>
                <RippleButton
                  bgColor="danger"
                  isDisabled={accountNameConfirm !== props.accountName}
                  onClick={() => deleteAccountById(props.accountId)}
                >
                  Delete
                </RippleButton>
              </>
            )}
          </div>
        }
      ></DialogFooter>
    </Dialog>
  );
};

export default AccountDeletionConfirmationModal;
