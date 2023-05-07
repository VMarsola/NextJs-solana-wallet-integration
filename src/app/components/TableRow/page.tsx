import { TableRowProps } from "@/types/TableTypes";
import { FC } from "react";

export const TableRow: FC<TableRowProps> = ({ amount, title }) => {
  return (
    <tbody className="break-all divide-y d text-sm font-normal text-gray-700">
      <tr key={title}>
        <td
          className="py-2 px-6 border-b-2 sm:table-cell break-words "
          key={title}
        >
          {title}
        </td>
        <td className="py-2 px-6 border-b-2 sm:table-cell" key={title}>
          {amount.toFixed(2)} USDC
        </td>
      </tr>
    </tbody>
  );
};
