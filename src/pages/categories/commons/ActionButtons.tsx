import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showModal } from "../../../store/modal/slice";
import { ModalType } from "../../../commons/components/modals/interfaces";
import { CategoryDeletionConfirmationProps } from "../../../commons/components/modals/types/CategoryDeletionConfirmationModal";

interface ActionButtonsProps {
  id: string;
  categoryName: string;
}
const ActionButtons = ({ id, categoryName }: ActionButtonsProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-x-2">
      <PencilSquareIcon
        onClick={() => navigate(`/categories/${id}/edit`)}
        className="w-7 h-7 cursor-pointer transition-colors hover:text-main duration-300"
      />
      <TrashIcon
        onClick={() => {
          dispatch(
            showModal({
              modalName: ModalType.CATEGORY_DELETION_CONFIRMATION,
              props: {
                categoryId: id,
                categoryName,
              } as CategoryDeletionConfirmationProps,
            })
          );
        }}
        className="w-7 h-7 cursor-pointer transition-colors hover:text-danger duration-300"
      />
    </div>
  );
};

export default ActionButtons;
