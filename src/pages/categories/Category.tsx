import {
  ExpandedState,
  createColumnHelper,
  getExpandedRowModel,
} from "@tanstack/react-table";
import { Tab, initTE } from "tw-elements";

import { usePageTitle } from "../../commons/hooks/usePageTitle";
import { useEffect, useState } from "react";
import Card from "../../commons/components/Card";
import { ICategoryWithRelations } from "../../commons/models/category";
import Table from "../../commons/components/table/Table";
import RippleButton from "../../commons/components/buttons/RippleButton";
import Spacer from "../../commons/components/Spacer";
import { useNavigate } from "react-router-dom";
import ExpandRowIcon from "./commons/ExpandRowIcon";
import ActionButtons from "./commons/ActionButtons";
import { useFindCategoriesQuery } from "../../store/category/api";
import Spinner from "../../commons/components/Spinner";
import { useAppSelector } from "../../commons/hooks/useAppSelector";
import {
  sltExpenseCategoryRaw,
  sltIncomeCategoryRaw,
} from "../../store/category/selectors";

const Category = () => {
  usePageTitle({
    title: "Categories",
    breadcrumb: [
      {
        label: "Categories",
      },
    ],
  });

  const navigate = useNavigate();

  const allIncomeCategories = useAppSelector(sltIncomeCategoryRaw);
  const allExpenseCategories = useAppSelector(sltExpenseCategoryRaw);

  const [expanded, setExpanded] = useState<ExpandedState>({});

  const { isFetching } = useFindCategoriesQuery();

  useEffect(() => {
    // initializing must be done when the component is mounted
    if (!isFetching) {
      initTE({ Tab });
    }
  }, [isFetching]);

  return (
    <div>
      <RippleButton
        onClick={() => {
          navigate("/categories/add");
        }}
      >
        Add New Category
      </RippleButton>
      <Spacer height={10} />
      <Card className="flex flex-col md:flex-row md:items-start md:divide-x-2">
        {isFetching ? (
          <Spinner />
        ) : (
          <>
            <ul
              className="mr-4 flex list-none flex-row md:flex-col flex-wrap pl-0"
              role="tablist"
              data-te-nav-ref
            >
              <li role="presentation" className="flex-grow text-center">
                <a
                  href="#tabs-incomes"
                  className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                  data-te-toggle="pill"
                  data-te-target="#tabs-incomes"
                  data-te-nav-active
                  role="tab"
                  aria-controls="tabs-incomes"
                  aria-selected="true"
                >
                  Incomes
                </a>
              </li>
              <li role="presentation" className="flex-grow text-center">
                <a
                  href="#tabs-expenses"
                  className="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                  data-te-toggle="pill"
                  data-te-target="#tabs-expenses"
                  role="tab"
                  aria-controls="tabs-expenses"
                  aria-selected="false"
                >
                  Expenses
                </a>
              </li>
            </ul>
            <div className="flex-1">
              <div
                className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-incomes"
                role="tabpanel"
                aria-labelledby="tabs-incomes"
                data-te-tab-active
              >
                <Table
                  data={allIncomeCategories}
                  columns={columns}
                  state={{ expanded }}
                  onExpandedChange={setExpanded}
                  getSubRows={(row) => row.Children}
                  getExpandedRowModel={getExpandedRowModel()}
                />
              </div>
              <div
                className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-expenses"
                role="tabpanel"
                aria-labelledby="tabs-expenses"
              >
                <Table
                  data={allExpenseCategories}
                  columns={columns}
                  state={{ expanded }}
                  onExpandedChange={setExpanded}
                  getSubRows={(row) => row.Children}
                  getExpandedRowModel={getExpandedRowModel()}
                />
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

const columnHelper = createColumnHelper<ICategoryWithRelations>();

const columns = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => (
      <div
        className="flex items-center gap-x-2"
        style={{ paddingLeft: info.row.depth * 2 + "rem" }}
      >
        <ExpandRowIcon
          canExpand={info.row.getCanExpand()}
          isExpanded={info.row.getIsExpanded()}
          onExpand={info.row.getToggleExpandedHandler()}
        />
        {info.getValue()}
      </div>
    ),
    footer: (info) => info.column.id,
    size: 80,
  }),
  columnHelper.display({
    header: "Actions",
    cell: ({ row }) => {
      return (
        <ActionButtons
          id={row.original.id}
          categoryName={row.original.name}
          hasChildren={row.getCanExpand()}
        />
      );
    },
    size: 10,
  }),
];

export default Category;
