import { FC } from "react";
import { TableTabProps } from "@/types/TableTypes";

export const TableTab: FC<
  TableTabProps & React.HTMLProps<HTMLButtonElement>
> = ({ onClick, id, currentPage }) => {
  return (
    <button
      onClick={onClick}
      id={id}
      data-testid={id}
      className={`bg-white py-2 px-2  text-black text-center border-b-4 ${
        currentPage === Number(id) ? "border-green-600" : "border-transparent"
      } sm:px-6 hover:border-green-600`}
    >
      Investments
    </button>
  );
};
