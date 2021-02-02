import React, { useContext } from "react";
import "./MovieTile.css";

import { Button } from "@material-ui/core";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const MovieTile = ({ movie, type, deleteAction, moveAction }) => {
	return (
		<div className="movie-tile">
			{movie.poster_path ? (
				<img
					src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
					alt="none"
					className="movie-poster"
				/>
			) : (
				<div className="movie-dummy"></div>
			)}

			<div className="control-btns">
				<Button
					variant="outlined"
					size="small"
					className="delete-btn tile-btn"
					onClick={() => deleteAction(movie.id)}
				>
					X
				</Button>
				{type === "watchlist" ? (
					<Button
						variant="outlined"
						size="small"
						className="watchlist-btn tile-btn"
						onClick={() => moveAction(movie)}
					>
						<FaEye></FaEye>
					</Button>
				) : (
					<Button
						variant="outlined"
						size="small"
						className="watched-btn tile-btn"
						onClick={() => moveAction(movie)}
					>
						<FaEyeSlash />
					</Button>
				)}
			</div>
		</div>
	);
};

export default MovieTile;
