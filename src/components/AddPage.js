import React, { useState, useEffect } from "react";
import "./AddPage.css";
import MovieCard from "./MovieCard";

const AddPage = () => {
	const [search, setSearch] = useState("");
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const axios = require("axios");
		const API_KEY = "3577baf0a01754393766e1692701710c";
		const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`;
		axios
			.get(url)
			.then((response) => {
				console.log(response);
				setMovies(response.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [search]);
	return (
		<div className="add">
			<div className="add__container">
				<div className="add__search">
					<input
						type="text"
						placeholder="search for movies"
						onChange={(e) => {
							e.preventDefault();
							setSearch(e.target.value);
						}}
					/>
				</div>
				<div className="add__info">
					{movies.length > 0 ? (
						<ul className="movie-list">
							{movies.map((movie) => (
								<MovieCard movie={movie} />
							))}
						</ul>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default AddPage;
