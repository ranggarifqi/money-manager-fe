import Card from "../../commons/components/Card";
import { usePageTitle } from "../../commons/hooks/usePageTitle";
import CategoryForm from "./commons/CategoryForm";

const NewCategory = () => {
  usePageTitle({
    title: "New Category",
    breadcrumb: [
      { label: "Categories", link: "/categories" },
      { label: "New" },
    ],
  });

  return (
    <div className="flex justify-center">
      <Card className="w-full lg:w-6/12 md:w-8/12">
        <CategoryForm />
      </Card>
    </div>
  );
};

export default NewCategory;
