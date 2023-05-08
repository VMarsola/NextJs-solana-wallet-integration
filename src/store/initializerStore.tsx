"use client";

import { TableRowProps } from "@/types/TableTypes";
import { useRef } from "react";
import { useWalletStore } from "./useWallet";

type InitializerProps = {
  wallet: TableRowProps[];
};

const InitializerStore = ({ wallet }: InitializerProps) => {
  const initializer = useRef(false);

  if (!initializer.current) {
    useWalletStore.setState({ state: { wallet, slicedWallet: wallet } });
    initializer.current = true;
  }

  return null;
};

export default InitializerStore;
