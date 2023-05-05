import React, { FC } from "react";

import { TableTitleProps } from "@/types/TableTitle";
import { UseTable } from "../../hooks/useTableTitle";

export const TableTitle: FC<TableTitleProps> = ({ title, icon }) => {
  const { handleIcon } = UseTable();

  return (
    <th className="py-2 px-3 ">
      <span className="flex items-center">
        {icon && handleIcon(icon)}
        <span className="px-1">{title}</span>
      </span>
    </th>
  );
};
