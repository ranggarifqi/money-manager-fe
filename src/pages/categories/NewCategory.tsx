import { Navigate, useNavigate } from "react-router-dom";
import Card from "../../commons/components/Card";
import { usePageTitle } from "../../commons/hooks/usePageTitle";
import CategoryForm from "./commons/CategoryForm";
import { useCreateCategoryMutation } from "../../store/category/api";
import { NONE } from "./commons/constants";
import { ETransactionType } from "../../commons/models/transactionType";

const NewCategory = () => {
  usePageTitle({
    title: "New Category",
    breadcrumb: [
      { label: "Categories", link: "/categories" },
      { label: "New" },
    ],
  });

  const navigate = useNavigate();

  const [createNewCategory, { isLoading, error, isSuccess }] = useCreateCategoryMutation();

  const onSubmit = (data: { type: string; parentId: string; name: string }) => {
    createNewCategory({
      name: data.name,
      parentId: data.parentId === NONE ? null : data.parentId,
      isIncome: data.type === ETransactionType.INCOME,
    });
  };

  if (isSuccess) {
    return <Navigate to="/categories" />;
  }

  return (
    <div className="flex justify-center">
      <Card className="w-full lg:w-6/12 md:w-8/12">
        <CategoryForm
          onCancel={() => navigate("/categories")}
          onSubmit={onSubmit}
          isLoading={isLoading}
          submissionError={error as string}
        />
      </Card>
    </div>
  );
};

export default NewCategory;
