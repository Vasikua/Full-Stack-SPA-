import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [FormData, setFormData] = useState({
    type: "expence",
    amound: 0,
    description: "",
  });
  const [value, setValue] = useState("expence");
  const [totalExpence, setTotalExpence] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransaction, setAllTransaction] = useState([]);
  return (
    <GlobalContext.Provider
      value={{
        value,
        setValue,
        totalExpence,
        setTotalExpence,
        totalIncome,
        setTotalIncome,
        allTransaction,
        setAllTransaction,
        FormData,
        setFormData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
