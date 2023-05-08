import * as web3 from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

import { useWalletStore } from "@/store/useWallet";

import InitializerStore from "@/store/initializerStore";
import { useWallet } from "@/app/hooks/useWallet";
import { TABLE_TITLES, TABLE_CONTENT } from "@/constants/table";

import TabRow from "../TabRow";
import { TableTitle } from "../TableTitle";
import { TableRow } from "../TableRow";

export async function Table() {
  const { getTokenBalances, publicKey } = useWallet();
  // const fetchTokens = await getTokenBalances(publicKey);

  const fetchTokens = TABLE_CONTENT;
  useWalletStore.setState({
    state: { wallet: fetchTokens ?? [], slicedWallet: fetchTokens ?? [] },
  });

  return (
    <>
      <div className="overflow-x-auto">
        <InitializerStore wallet={fetchTokens ?? []} />
        <TabRow />
        <table className="table-auto  bg-white py-4 px-6 rounded  text-left border-b-2-collapse md:table-fixed">
          <TableTitle titles={TABLE_TITLES} />
          <TableRow />
        </table>
      </div>
    </>
  );
}
