"use client";
import { UseTable } from "@/app/hooks/useTable";
import { useWalletStore } from "@/store/useWallet";
import React, { useEffect } from "react";
import { TableTab } from "../TableTabs";

export default function index() {
  const { state } = useWalletStore();
  const { handlePageClick, currentPage } = UseTable(state.wallet);

  return (
    <div className="w-full sm:w-auto">
      <TableTab id="1" currentPage={currentPage} onClick={handlePageClick} />
      <TableTab id="2" currentPage={currentPage} onClick={handlePageClick} />
    </div>
  );
}
