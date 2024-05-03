import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showData } from "../../features/DetailSlice";

const AppContext = React.createContext();
export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider = ({ children }) => {
 

  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
};
