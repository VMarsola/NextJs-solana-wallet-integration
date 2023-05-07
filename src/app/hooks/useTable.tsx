import { TableRowProps } from "@/types/TableTypes";
import { useState } from "react";

export const UseTable = (content: TableRowProps[]) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = Math.ceil(content.length / 2);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = content.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(Number(event.currentTarget.id));
  };

  return {
    handlePageClick,
    currentItems,
    currentPage,
  };
};
