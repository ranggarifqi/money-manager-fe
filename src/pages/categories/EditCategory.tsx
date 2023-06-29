import { Navigate, useNavigate, useParams } from "react-router-dom";
import { usePageTitle } from "../../commons/hooks/usePageTitle";
import { useAppSelector } from "../../commons/hooks/useAppSelector";
import { sltCategoryById } from "../../store/category/selectors";
import { useUpdateCategoryMutation } from "../../store/category/api";
import { ETransactionType } from "../../commons/models/transactionType";
import { NONE } from "./commons/constants";
import Card from "../../commons/components/Card";
import CategoryForm from "./commons/CategoryForm";
import { useEffect, useState } from "react";

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

  const navigate = useNavigate();

  const [errMessage, setErrMessage] = useState<string | undefined>();

  const [updateCategory, { isLoading, error, isSuccess }] =
    useUpdateCategoryMutation();

  useEffect(() => {
    setErrMessage(error as string);
  }, [error]);

  const onSubmit = (data: { type: string; parentId: string; name: string }) => {
    if (data.parentId === categoryId) {
      setErrMessage("Category can't become a child of itself");
      return;
    }

    setErrMessage(undefined);

    console.log({
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
          submissionError={errMessage}
          initialValues={{
            parentId: category?.parentId ?? NONE,
            name: category?.name ?? "",
            type: category?.isIncome
              ? ETransactionType.INCOME
              : ETransactionType.EXPENSE,
          }}
        />
      </Card>
    </div>
  );
};

export default EditCategory;
