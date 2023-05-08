"use client";
import { useWalletStore } from "@/store/useWallet";

export function TableRow() {
  const { state } = useWalletStore();
  return (
    <>
      {state?.slicedWallet?.map((e) => (
        <tbody
          key={e.title}
          className="break-all divide-y d text-sm font-normal text-gray-700 "
        >
          <tr>
            <td className="py-2 px-6 border-b-2 w-72 sm:table-cell break-words ">
              {e.title}
            </td>
            <td className="py-2 px-6 border-b-2 sm:table-cell">
              {e.amount.toFixed(2)} USDC
            </td>
          </tr>
        </tbody>
      ))}
    </>
  );
}
