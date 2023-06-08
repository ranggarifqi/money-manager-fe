import { Menu, MenuItem } from "@blueprintjs/core";
import { useAppDispatch } from "../../../../commons/hooks/useAppDispatch";
import { logoutSuccess } from "../../../../store/session/slice";

const AvatarMenu = () => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logoutSuccess());
  };

  return (
    <Menu>
      <MenuItem icon="log-out" onClick={onLogout} text="Logout" />
    </Menu>
  );
};

export default AvatarMenu;
