import React, { useState, createContext, ReactNode } from "react";

export type AppContextType = {
  section: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
};
type ContextProps = {
  children: ReactNode;
};

export const AppContext = createContext<AppContextType>({
  section: "",
  setSection: () => {},
});

const Context: React.FC<ContextProps> = ({ children }) => {
  const [section, setSection] = useState<string>("Home");

  return (
    <AppContext.Provider value={{ section, setSection }}>
      {children}
    </AppContext.Provider>
  );
};

export default Context;
