import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface ExpandIconProps {
  canExpand: boolean;
  isExpanded: boolean;
  onExpand: () => void;
}

const ExpandRowIcon = ({
  canExpand,
  isExpanded,
  onExpand,
}: ExpandIconProps) => {
  if (canExpand) {
    if (isExpanded) {
      return (
        <ChevronDownIcon
          className="w-5 h-5 cursor-pointer"
          onClick={onExpand}
        />
      );
    }
    return (
      <ChevronRightIcon className="w-5 h-5 cursor-pointer" onClick={onExpand} />
    );
  }
  return null;
};

export default ExpandRowIcon;
