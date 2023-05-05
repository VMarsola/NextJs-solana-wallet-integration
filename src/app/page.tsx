import { TableTitle } from "./TableTitle/page";

import { TABLE_TITLES, TABLE_CONTENT } from "../constants/table";

import { useWallet } from "@/hooks/useWallet";
import { useStore } from "@/store/useTableFilter";
import dynamic from "next/dynamic";

// type State = {
//   firstName: string;
//   lastName: string;
// };

// type Action = {
//   updateFirstName: (firstName: State["firstName"]) => void;
//   updateLastName: (lastName: State["lastName"]) => void;
// };

// // Create your store, which includes both state and (optionally) actions
// const useStore = create<State & Action>((set) => ({
//   firstName: "",
//   lastName: "",
//   updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
//   updateLastName: (lastName) => set(() => ({ lastName: lastName })),
// }));

export default async function Home() {
  const { getTokenBalances, publicKey } = useWallet();
  const fetchTokens = await getTokenBalances(publicKey);

  useStore.setState({
    count: 1,
    inc(count) {
      count + 3;
    },
  });

  const count = useStore.getState().count;
  const inc = useStore.getState().inc;

  return (
    <>
      {count}
      <button onClick={() => inc}>{count}</button>
      <div className="bg-white py-4 px-6 rounded ">
        <table className="w-full text-left border-b-2-collapse">
          <thead>
            <tr className="text-sm font-semibold text-black">
              {TABLE_TITLES.map((e) => (
                <TableTitle key={e.title} {...e} />
              ))}
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-gray-700">
            {fetchTokens?.map((e) => (
              <tr>
                <td className="py-2 px-3 border-b-2" key={e.title}>
                  {e.title}
                </td>
                <td className="py-2 px-3 border-b-2" key={e.title + e.amount}>
                  {e.amount.toFixed(2)} USDC
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
