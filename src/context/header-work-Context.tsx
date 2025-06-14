'use client'
import { createContext, useState } from "react";

const HeaderWorkContext = createContext({});


export const HeaderWorkContextProvider = ({ children }: {children: React.ReactNode}) => {
const [headerWork, setHeaderWork] = useState({});

  return (
    <HeaderWorkContext.Provider value={{}}>
      {children}
    </HeaderWorkContext.Provider>
  );
};