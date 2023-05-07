"use client";
import { FC } from "react";

import { TableProps } from "@/types/TableTypes";

import { TableTitle } from "../TableTitle/page";
import { TableTab } from "../TableTabs/page";
import { TableRow } from "../TableRow/page";
import { UseTable } from "../../hooks/useTable";

export const Table: FC<TableProps> = ({ content, titles }) => {
  const { currentItems, handlePageClick, currentPage } = UseTable(content);

  return (
    <>
      <div className="overflow-x-auto">
        <div className="w-full sm:w-auto">
          <TableTab
            id="1"
            currentPage={currentPage}
            onClick={handlePageClick}
          />
          <TableTab
            id="2"
            currentPage={currentPage}
            onClick={handlePageClick}
          />
        </div>
        <table className="table-auto  bg-white py-4 px-6 rounded  text-left border-b-2-collapse md:table-fixed">
          <TableTitle titles={titles} />
          {currentItems.map((item) => {
            return <TableRow key={item.title} {...item} />;
          })}
        </table>
      </div>
    </>
  );
};
