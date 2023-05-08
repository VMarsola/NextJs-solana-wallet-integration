import { create } from "zustand";

import { TableRowProps } from "@/types/TableTypes";

type ActionProps = {
  sliceWallet: (wallet: TableRowProps[], slicedWallet: TableRowProps[]) => void;
};
type StoreProps = {
  state: {
    wallet: TableRowProps[];
    slicedWallet: TableRowProps[];
  };
  actions: ActionProps;
};

export const useWalletStore = create<StoreProps>((set) => ({
  state: {
    wallet: [],
    slicedWallet: [],
  },
  actions: {
    sliceWallet: (wallet, slicedWallet) =>
      set((state) => ({
        state: { wallet: wallet, slicedWallet: slicedWallet },
      })),
  },
}));
