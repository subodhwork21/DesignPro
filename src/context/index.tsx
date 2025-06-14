'use client';

import { createContext, useContext, useState } from 'react';

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [toggleNav, setToggleNav] = useState(false);

  return (
    <AppContext.Provider
      value={{
        toggleNav,
        setToggleNav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
