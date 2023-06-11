import { Menu, MenuItem } from "@blueprintjs/core";

const AccountMenu = () => {
  return (
    <Menu>
      <MenuItem icon="edit" onClick={undefined} text="Edit" />
      <MenuItem icon="delete" onClick={undefined} text="Delete" />
    </Menu>
  );
};

export default AccountMenu;
