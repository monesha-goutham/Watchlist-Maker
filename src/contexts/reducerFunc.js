const reducerFunc = (state, action) => {
	switch (action.type) {
		case "ADD_TO_WATCHLIST":
			return {
				...state,
				watchlist: [action.payload, ...state.watchlist],
			};

		case "ADD_TO_WATCHED":
			return {
				...state,
				watched: [action.payload, ...state.watched],
				watchlist: state.watchlist.filter(
					(movie) => movie.id !== action.payload.id
				),
			};

		case "DELETE_FROM_WATCHLIST":
			return {
				...state,
				watchlist: state.watchlist.filter(
					(movie) => movie.id !== action.payload
				),
			};

		case "DELETE_FROM_WATCHED":
			return {
				...state,
				watched: state.watched.filter((movie) => movie.id !== action.payload),
			};

		case "MOVE_TO_WATCHLIST":
			return {
				...state,
				watched: state.watched.filter(
					(movie) => movie.id !== action.payload.id
				),
				watchlist: [action.payload, ...state.watchlist],
			};
		default:
			return state;
	}
};

export default reducerFunc;
