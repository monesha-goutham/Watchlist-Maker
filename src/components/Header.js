import React from "react";
import "./Header.css";
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
	const history = useHistory();
	return (
		<div className="header-container">
			<div className="header">
				<Link to="/">
					<div className="header__title">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Fandom_heart-logo.svg/250px-Fandom_heart-logo.svg.png"
							alt="logo"
							className="header__logo"
						/>
						<h3>WatchList</h3>
					</div>
				</Link>

				<ul className="header__list">
					<li className="header__item">
						<Link to="/">Watchlist</Link>
					</li>
					<li className="header__item">
						<Link to="/watched">Watched</Link>
					</li>
					<li>
						<Button
							variant="outlined"
							className="header__btn"
							onClick={() => history.push("/add")}
						>
							+ ADD
						</Button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
