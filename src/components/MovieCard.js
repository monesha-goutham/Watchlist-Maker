import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import "./MovieCard.css";

import { GlobalContext } from "./../contexts/global-context";

const MovieCard = ({ movie }) => {
	const { watchlist, addToWatchlist, addToWatched, watched } = useContext(
		GlobalContext
	);
	const movieExistsInWatchlist = watchlist.find(
		(inside) => inside.id === movie.id
	)
		? true
		: false;

	const movieExistsInWatched = watched.find((inside) => inside.id === movie.id)
		? true
		: false;

	return (
		<div className="movie-card">
			{movie.poster_path ? (
				<img
					src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
					alt="none"
					className="movie-card__img"
				/>
			) : (
				<div className="movie-card__filler-img-container">
					<div className="movie-card__filler-img"></div>
				</div>
			)}
			<div className="movie-card__info">
				{/* many unwanted info here */}
				<div className="info-text">
					<h2>{movie.title}</h2>
					<p>{movie.release_date ? movie.release_date.substring(0, 4) : "-"}</p>
				</div>

				<div className="info__rating">
					{movie.vote_average > 2 ? (
						<div
							className="rating__inner"
							style={{ width: `${movie.vote_average * 10}%` }}
						>
							<h3>{movie.vote_average}</h3>
						</div>
					) : null}
				</div>

				<div className="movie-card__buttons">
					{/* buttons are disabled to prevent the problem of adding the same movie twice */}
					<div className="btn__watchlist">
						<Button
							variant="outlined"
							className="btn-watchlist btn"
							onClick={() => addToWatchlist(movie)}
							disabled={
								// check if movie is first in the "watched"
								// if "true" : disable
								// if "false" : check if movie is in the "watchlist"
								// if "true" : disable
								// if "false" : enable
								movieExistsInWatched
									? true
									: movieExistsInWatchlist
									? true
									: false
							}
						>
							Add to watchlist
						</Button>
					</div>
					<div className="btn__watched ">
						<Button
							variant="outlined"
							className="btn-watched btn"
							onClick={() => addToWatched(movie)}
							disabled={movieExistsInWatched ? true : false}
						>
							Add to watched
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
