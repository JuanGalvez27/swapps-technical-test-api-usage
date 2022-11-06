import { createContext, useState } from "react";

export const DataContext = createContext();
const emptyData = [{title: "Oe",
                    author_name: ["oe2"]}];

export const DataProvider = ({ children }) => {
  const [results, setResults] = useState([emptyData]);
  return (
    <DataContext.Provider value={{
      results,
      setResults
    }}>
      { children }
    </DataContext.Provider>
  )
}

