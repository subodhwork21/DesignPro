'use client';

import React, { createContext, useContext, useState } from "react";


export const HeaderNewsContext = createContext({
  headerNews: {
    backgroundColor: "bg-tc-primary",
    navItemsColor: 'text-black',
    newsTitleColor: 'text-white',
    newsDateColor: 'text-white',
    newsAuthorName: "text-white"
  },
  setHeaderNews: (value: any) => {},
});


export const HeaderNewsContextProvider = ({ children }: any) => {
  const [headerNews, setHeaderNews] = useState({
    backgroundColor: "bg-tc-primary",
  navItemsColor: 'text-black',
  newsTitleColor: 'text-white',
  newsDateColor: 'text-white',
  newsAuthorName: "text-white"
  });

  return (
    <HeaderNewsContext.Provider value={{ headerNews, setHeaderNews }}>
      {children}
    </HeaderNewsContext.Provider>
  );

}