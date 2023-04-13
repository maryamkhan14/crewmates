import { createContext, useReducer } from "react";
export const CrewmatesContext = createContext();

export const crewmatesContextReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export const CrewmatesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(crewmatesContextReducer, {});
  return (
    <CrewmatesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CrewmatesContext.Provider>
  );
};
