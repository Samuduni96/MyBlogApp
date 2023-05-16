import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false,
};

if (typeof window !== "undefined") {
    const storedUser = localStorage.getItem("user");
    INITIAL_STATE.user = storedUser ? JSON.parse(storedUser) : null;
  }

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("user", JSON.stringify(state.user));
        }
    }, [state.user]);

    return (
        <Context.Provider
        value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}
        >
            {children}
        </Context.Provider>
    );
};