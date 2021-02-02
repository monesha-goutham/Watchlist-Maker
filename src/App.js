import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import AddPage from "./components/AddPage";
import { GlobalStateProvider } from "./contexts/global-context";

function App() {
	return (
		<GlobalStateProvider>
			<Router>
				<div className="App">
					<Header />

					<Switch>
						<Route path="/add">
							<AddPage />
						</Route>
						<Route path="/watched">
							<Watched />
						</Route>
						<Route exact path="/">
							<WatchList />
						</Route>
					</Switch>
				</div>
			</Router>
		</GlobalStateProvider>
	);
}

export default App;
