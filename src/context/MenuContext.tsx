import React, { createContext, useContext, useState } from "react";

interface ContextProvider {
  isMenuExpanded: boolean;
  handleToggleMenuState: () => void;
}

interface ChildrenProps {
  children: React.ReactNode;
}

export const MenuContext = createContext<ContextProvider>({
  isMenuExpanded: true,
  handleToggleMenuState: () => {},
});

export const MenuContextProvider = ({ children }: ChildrenProps) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(true);
  const handleToggleMenuState = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <MenuContext.Provider value={{ isMenuExpanded, handleToggleMenuState }}>
      {children}
    </MenuContext.Provider>
  );
};

export function useToggleMenu() {
  return useContext(MenuContext);
}
