import { MenuItem } from "@/interfaces/menu.interface";
import React, { ReactNode, useState } from "react";

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: number;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = React.createContext<IAppContext>({
  menu: [],
  firstCategory: 0,
});

export const AppContextProvider = ({
  children,
  menu,
  firstCategory,
}: IAppContext & { children: ReactNode }): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);

  const setMenu = (menu: MenuItem[]) => {
    setMenuState(menu);
  };

  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
