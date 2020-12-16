import { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [info, setInfo] = useState({});

  return (
    <SearchContext.Provider value={{ info, setInfo }}>
      {children}
    </SearchContext.Provider>
  );
};
