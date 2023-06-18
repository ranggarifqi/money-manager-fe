import { Menu, MenuItem } from "@blueprintjs/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showModal } from "../../../store/modal/slice";
import { ModalType } from "../../../commons/components/modals/interfaces";

interface Props {
  accountId: string;
}

const AccountMenu = ({ accountId }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
              },
            })
          )
        }
        text="Delete"
      />
    </Menu>
  );
};

export default AccountMenu;
