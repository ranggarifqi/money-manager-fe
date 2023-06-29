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

export interface CategoryDeletionConfirmationProps {
  categoryId: string;
  categoryName: string;
}

const isCorrectProp = (
  props: unknown | null
): props is CategoryDeletionConfirmationProps => {
  if (props === null) {
    return false;
  }
  return (props as CategoryDeletionConfirmationProps).categoryId !== undefined;
};

const CategoryDeletionConfirmationModal = () => {
  const dispatch = useDispatch();
  const activeModal = useAppSelector(sltActiveModal);
  const props = useAppSelector(sltModalProps);

  const [accountNameConfirm, setAccountNameConfirm] = useState("");

  // const [deleteAccountById, { isLoading, error, isError, isSuccess }] =
  //   useDeleteAccountByIdMutation();

  useEffect(() => {
    if (activeModal === null) {
      setAccountNameConfirm("");
    }
  }, [activeModal]);

  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(closeModal());
  //   }
  // }, [dispatch, isSuccess]);

  if (!isCorrectProp(props)) {
    return <></>;
  }

  return (
    <Dialog
      isOpen={activeModal === ModalType.CATEGORY_DELETION_CONFIRMATION}
      title="Category Deletion Confirmation"
      onClose={() => dispatch(closeModal())}
      // isCloseButtonShown={!isLoading}
      // canOutsideClickClose={!isLoading}
      // canEscapeKeyClose={!isLoading}
    >
      <DialogBody>
        <div>
          <p>You're going to delete this category.</p>
          <p>This action can't be undone!</p>
        </div>
        <Spacer height={10} />
        <div>
          <p>
            But don't worry, any transactions created using this category would
            not be deleted
          </p>
        </div>
        <Spacer height={20} />
        <div>
          <p>Please type the category's name to continue this operation</p>
          <TextInput
            placeholder={props.categoryName}
            value={accountNameConfirm}
            onChange={(e) => setAccountNameConfirm(e.target.value)}
            // disabled={isLoading}
          />
        </div>
        {/* {isError && (
          <div>
            <Spacer height={10} />
            <p className="text-danger">{error as string}</p>
          </div>
        )} */}
      </DialogBody>
      <DialogFooter
        actions={
          <div className="flex gap-x-2">
            <>
              <RippleButton
                bgColor="info"
                onClick={() => dispatch(closeModal())}
              >
                Cancel
              </RippleButton>
              <RippleButton
                bgColor="danger"
                isDisabled={accountNameConfirm !== props.categoryName}
                // onClick={() => deleteAccountById(props.categoryId)}
              >
                Delete
              </RippleButton>
            </>
            {/* {isLoading ? (
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
                  isDisabled={accountNameConfirm !== props.categoryName}
                  // onClick={() => deleteAccountById(props.categoryId)}
                >
                  Delete
                </RippleButton>
              </>
            )} */}
          </div>
        }
      ></DialogFooter>
    </Dialog>
  );
};

export default CategoryDeletionConfirmationModal;
