import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

interface ActionButtonsProps {
  id: string;
}
const ActionButtons = ({ id }: ActionButtonsProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-x-2">
      <PencilSquareIcon
        onClick={() => navigate(`/categories/${id}/edit`)}
        className="w-7 h-7 cursor-pointer transition-colors hover:text-main duration-300"
      />
      <TrashIcon className="w-7 h-7 cursor-pointer transition-colors hover:text-danger duration-300" />
    </div>
  );
};

export default ActionButtons;
