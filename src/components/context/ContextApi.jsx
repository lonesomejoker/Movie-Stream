import React from "react";

const AppContext = React.createContext();
export const useAppContext = () => React.useContext(AppConext);

export const AppContextProvider = ({ children }) => {
  const [appState, setAppState] = React.useState({});
  
  const updateState = (newState) => {
    setAppState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <AppContext.Provider value={{ appState, updateState }}>
      {children}
    </AppContext.Provider>
  );
};
