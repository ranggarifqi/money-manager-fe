import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ModalProps,
  ModalType,
} from "../../commons/components/modals/interfaces";

interface ModalState {
  activeModal: ModalType | null;
  props: ModalProps | null;
}

const initialState: ModalState = {
  activeModal: null,
  props: null,
};

interface ShowModalPayload {
  modalName: ModalType;
  props?: ModalProps;
}

export const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal(state, action: PayloadAction<ShowModalPayload>) {
      state.activeModal = action.payload.modalName;
      state.props = action.payload.props ?? null;
    },
    closeModal(state) {
      state.activeModal = null;
      state.props = null;
    },
  },
});

export const { showModal, closeModal } = slice.actions;
export default slice.reducer;
