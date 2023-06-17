import { Menu, MenuItem } from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";

interface Props {
  accountId: string;
}

const AccountMenu = ({ accountId }: Props) => {
  const navigate = useNavigate();
  return (
    <Menu>
      <MenuItem
        icon="edit"
        onClick={() => navigate(`/accounts/${accountId}/edit`)}
        text="Edit"
      />
      <MenuItem icon="delete" onClick={undefined} text="Delete" />
    </Menu>
  );
};

export default AccountMenu;
