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
import Spacer from "../../commons/components/Spacer";
import RippleButton from "../../commons/components/buttons/RippleButton";

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

  if (!categoryId || !category) {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col justify-center">
          <p>No Category Was Found</p>
          <Spacer height={10} />
          <RippleButton bgColor="info" onClick={() => navigate("/categories")}>
            Go Back
          </RippleButton>
        </div>
      </div>
    );
  }

  if (isSuccess) {
    return <Navigate to="/categories" />;
  }

  const onSubmit = (data: { type: string; parentId: string; name: string }) => {
    if (data.parentId === categoryId) {
      setErrMessage("Category can't become a child of itself");
      return;
    }

    setErrMessage(undefined);

    updateCategory({
      id: categoryId,
      name: data.name,
      parentId: data.parentId === NONE ? null : data.parentId,
      isIncome: data.type === ETransactionType.INCOME,
    });
  };

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
