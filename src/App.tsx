import { Dashboard } from "./components/dashboard";
import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";
import { Teste } from "./components/forms";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <TransactionsProvider>
        <Teste onRequestClose={handleCloseNewTransactionModal} />
        <Dashboard />
        <GlobalStyle />
      </TransactionsProvider>
    </>
  );
}
