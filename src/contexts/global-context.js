import React, { createContext, useReducer, useEffect } from "react";
import reducerFunc from "./reducerFunc";
import { db } from "../firebase";


// creete the global context
export const GlobalContext = createContext();

// create the initial state
const initialState = {
	watchlist: [],
	watched: [],
};

// create the context provider
export const GlobalStateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducerFunc, initialState);

	useEffect(() => {}, [state]);

	// create the action functions
	const addToWatchlist = (movie) => {
		dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
	};

	const addToWatched = (movie) => {
		dispatch({ type: "ADD_TO_WATCHED", payload: movie });
	};

	const deleteFromWatchlist = (id) => {
		dispatch({ type: "DELETE_FROM_WATCHLIST", payload: id });
	};

	const deleteFromWatched = (id) => {
		dispatch({ type: "DELETE_FROM_WATCHED", payload: id });
	};

	const moveToWatchlist = (movie) => {
		// code to move from watched to watchlist
		dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
	};

	return (
		<GlobalContext.Provider
			value={{
				watched: state.watched,
				watchlist: state.watchlist,
				addToWatchlist,
				addToWatched,
				deleteFromWatchlist,
				deleteFromWatched,
				moveToWatchlist,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
