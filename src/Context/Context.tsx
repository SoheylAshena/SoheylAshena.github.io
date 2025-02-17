import React, { useState, createContext, ReactNode } from "react";

export type AppContextType = {
  section: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
type ContextProps = {
  children: ReactNode;
};

export const AppContext = createContext<AppContextType>({
  section: "",
  setSection: () => {},
  loading: true,
  setLoading: () => {},
});

const Context: React.FC<ContextProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState<string>("Home");

  return (
    <AppContext.Provider value={{ section, setSection, loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export default Context;
