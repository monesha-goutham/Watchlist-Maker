import React, { useContext } from "react";
import "./Watched.css";

import { GlobalContext } from "./../contexts/global-context";
import { Button } from "@material-ui/core";
import MovieTile from "./MovieTile";

const Watched = () => {
	const { watched, deleteFromWatched, moveToWatchlist } = useContext(
		GlobalContext
	);
	return (
		<div className="watched">
			<div className="watched__heading">
				<h1>Watched Movies</h1>
			</div>
			<div className="watched__grid">
				{watched.map((movie) => (
					<MovieTile
						movie={movie}
						type="watched"
						deleteAction={deleteFromWatched}
						moveAction={moveToWatchlist}
					/>
				))}
			</div>
		</div>
	);
};

export default Watched;

// TODO :

// check if the api call has any returned search result and only then call for the "movie" component
// add valid movie info and check for "null" returns.
// start with CSS.
