import * as web3 from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

export function useWallet() {
  const walletToQuery = "6LxwUCRLXA2rvjKbZhG3xDDZij9paxrHBDu7iof6ui4G";

  const getTokenBalances = async function (publicKey: web3.PublicKey) {
    try {
      const connection = new web3.Connection(
        web3.clusterApiUrl("mainnet-beta")
      );
      const { value } = await connection.getParsedTokenAccountsByOwner(
        publicKey,
        { programId: TOKEN_PROGRAM_ID }
      );
      const res = value.map(({ account }) => {
        const data = account.data.parsed.info;
        return { title: data.mint, amount: data.tokenAmount.uiAmount };
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  };
  const publicKey = new web3.PublicKey(walletToQuery);

  return {
    getTokenBalances,
    publicKey,
  };
}
