import { Menu, MenuItem } from "@blueprintjs/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showModal } from "../../../store/modal/slice";
import { ModalType } from "../../../commons/components/modals/interfaces";
import { AccountDeletionConfirmationProps } from "../../../commons/components/modals/types/AccountDeletionConfirmationModal";
import { useAppSelector } from "../../../commons/hooks/useAppSelector";
import { sltAccountById } from "../../../store/account/selectors";

interface Props {
  accountId: string;
}

const AccountMenu = ({ accountId }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const account = useAppSelector((state) => sltAccountById(state, accountId));

  return (
    <Menu>
      <MenuItem
        icon="edit"
        onClick={() => navigate(`/accounts/${accountId}/edit`)}
        text="Edit"
      />
      <MenuItem
        icon="delete"
        onClick={() =>
          dispatch(
            showModal({
              modalName: ModalType.ACCOUNT_DELETION_CONFIRMATION,
              props: {
                accountId,
                accountName: account?.name,
              } as AccountDeletionConfirmationProps,
            })
          )
        }
        text="Delete"
      />
    </Menu>
  );
};

export default AccountMenu;
