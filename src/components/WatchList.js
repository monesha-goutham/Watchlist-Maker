import React, { useContext } from "react";
import "./WatchList.css";
import { GlobalContext } from "./../contexts/global-context";
import { Button } from "@material-ui/core";
import MovieTile from "./MovieTile";

const WatchList = () => {
	const { watchlist, deleteFromWatchlist, addToWatched } = useContext(
		GlobalContext
	);
	return (
		<div className="watchlist">
			<div className="watchlist__heading">
				<h1>Watchlist</h1>
			</div>
			<div className="watchlist__grid">
				{watchlist.map((movie) => (
					<MovieTile
						movie={movie}
						type="watchlist"
						deleteAction={deleteFromWatchlist}
						moveAction={addToWatched}
					/>
				))}
			</div>
		</div>
	);
};

export default WatchList;
