import { useWallet } from "@/app/useWallet";
import { TABLE_TITLES } from "../constants/table";
import { Table } from "./components/Table/page";

export default async function Home() {
  const { getTokenBalances, publicKey } = useWallet();
  const fetchTokens = await getTokenBalances(publicKey);

  return (
    <>
      <Table titles={TABLE_TITLES} content={fetchTokens ?? []} />
    </>
  );
}
