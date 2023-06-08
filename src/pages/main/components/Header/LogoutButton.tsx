import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { useAppDispatch } from "../../../../commons/hooks/useAppDispatch";
import { logoutSuccess } from "../../../../store/session/slice";

const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(logoutSuccess());
  };

  return (
    <ArrowLeftOnRectangleIcon
      className="font-black-100 h-7 w-7 cursor-pointer"
      onClick={onClick}
    />
  );
};

export default LogoutButton;
