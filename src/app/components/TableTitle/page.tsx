import React, { FC } from "react";

import { TableTitleList } from "@/types/TableTypes";
import { UseTableTitle } from "@/app/hooks/useTableTitle";

export const TableTitle: FC<TableTitleList> = ({ titles }) => {
  const { handleIcon } = UseTableTitle();

  return (
    <thead>
      <tr className="text-sm font-semibold text-black">
        {titles.map((e) => (
          <th key={e.title} className="py-2 px-6 ">
            <span className="flex items-center">
              {e.icon && handleIcon(e.icon)}
              <span className="px-1">{e.title}</span>
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
};
