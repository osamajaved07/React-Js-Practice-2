import React, { createContext } from "react";
export const DataContext = createContext();

const Usercontext = ({ children }) => {
  const userName = "Osama";
  return (
    <div>
      <DataContext.Provider value={userName}>{children}</DataContext.Provider>
    </div>
  );
};

export default Usercontext;
