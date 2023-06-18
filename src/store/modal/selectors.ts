import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const sltModal = (state: RootState) => {
  return state.modal;
};

export const sltActiveModal = createSelector(sltModal, (modal) => {
  return modal.activeModal;
});

export const sltModalProps = createSelector(sltModal, (modal) => {
  return modal.props;
});
