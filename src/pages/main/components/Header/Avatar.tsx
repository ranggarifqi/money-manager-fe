import { Popover2 } from "@blueprintjs/popover2";
import AvatarMenu from "./AvatarMenu";

const Avatar = () => {
  return (
    <Popover2
      content={<AvatarMenu />}
      position="bottom"
    >
      <div className="rounded-full h-8 w-8 bg-main"></div>
    </Popover2>
  );
};

export default Avatar;
