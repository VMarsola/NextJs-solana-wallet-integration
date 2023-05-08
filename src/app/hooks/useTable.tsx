import { useWalletStore } from "@/store/useWallet";
import { TableRowProps } from "@/types/TableTypes";
import { useState } from "react";

export const UseTable = (content: TableRowProps[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { state, actions } = useWalletStore();

  const itemsPerPage = Math.ceil(content.length / 2);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = () => {
    if (content.length > 1) {
      return content.slice(indexOfFirstItem, indexOfLastItem);
    }
    return content;
  };

  const handlePageClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    actions.sliceWallet(state.wallet, currentItems());
    setCurrentPage(Number(event.currentTarget.id));
  };

  return {
    handlePageClick,
    currentItems,
    currentPage,
  };
};
