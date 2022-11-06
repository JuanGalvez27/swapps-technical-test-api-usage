import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  
  return (
    <DataContext.Provider value={{
      results,
      setResults
    }}>
      { children }
    </DataContext.Provider>
  )
}

