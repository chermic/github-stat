import React from 'react';
import reducer, { initialState } from './reducer';

const Context = React.createContext();

const StoreProvider = ({ children }) => {
  const reactReducer = React.useReducer(reducer, initialState);
  return (
    <Context.Provider value={reactReducer}>
      {children}
    </Context.Provider>
  );
};

const useStore = () => {
  const [state, dispatch] = React.useContext(Context);
  return { state, dispatch };
};

export { StoreProvider, useStore };
