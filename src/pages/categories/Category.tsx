import {
  ExpandedState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { usePageTitle } from "../../commons/hooks/usePageTitle";
import { useState } from "react";
import Card from "../../commons/components/Card";
import { ICategoryWithRelations } from "../../commons/models/category";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";

const defaultTableData: ICategoryWithRelations[] = [
  {
    id: "asd",
    name: "Category 1",
    isIncome: false,
    parentId: null,
    userId: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    Children: [
      {
        id: "zzz",
        name: "Sub Category 1 - 1",
        isIncome: false,
        parentId: "asd",
        userId: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
];

const columnHelper = createColumnHelper<ICategoryWithRelations>();

const columns = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => (
      <div
        className="flex items-center gap-x-2"
        style={{ paddingLeft: info.row.depth * 2 + "rem" }}
      >
        <ExpandIcon
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
    cell: () => {
      return (
        <div className="flex items-center gap-x-2">
          <PencilSquareIcon className="w-7 h-7 cursor-pointer transition-colors hover:text-main duration-300" />
          <TrashIcon className="w-7 h-7 cursor-pointer transition-colors hover:text-danger duration-300" />
        </div>
      );
    },
    size: 10,
  }),
];

interface ExpandIconProps {
  canExpand: boolean;
  isExpanded: boolean;
  onExpand: () => void;
}
const ExpandIcon = ({ canExpand, isExpanded, onExpand }: ExpandIconProps) => {
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

// TODO: Tabview to change between Income categories & expense categories
const Category = () => {
  usePageTitle({
    title: "Categories",
    breadcrumb: [
      {
        label: "Categories",
      },
    ],
  });

  const [tableData] = useState<ICategoryWithRelations[]>(defaultTableData);
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSubRows: (row) => row.Children,
    debugTable: true,
  });

  return (
    <div>
      <Card>
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const headerClass = classNames("px-6 py-6");
                  return (
                    <th
                      key={header.id}
                      scope="col"
                      className={headerClass}
                      style={{ width: `${header.column.getSize()}%` }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="whitespace-nowrap px-6 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Category;
