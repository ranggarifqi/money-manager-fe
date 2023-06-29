import { useParams } from "react-router-dom";
import { usePageTitle } from "../../commons/hooks/usePageTitle";
import { useAppSelector } from "../../commons/hooks/useAppSelector";
import { sltCategoryById } from "../../store/category/selectors";

const EditCategory = () => {
  const { categoryId } = useParams();

  const category = useAppSelector((state) =>
    sltCategoryById(state, categoryId ?? "")
  );

  usePageTitle({
    title: "Edit Category",
    breadcrumb: [
      { label: "Categories", link: "/categories" },
      { label: category?.name ?? "" },
      { label: "Edit" },
    ],
  });

  return <></>;
};

export default EditCategory;
