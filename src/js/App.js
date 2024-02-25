import React, { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";

import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Welcome from "./views/Welcome";
import Settings from "./views/Settings";
import Chat from "./views/Chat";

import configStore from "./store";
import { listenToAuthChanges } from "./actions/auth";

const store = configStore();

export default function App() {
	useEffect(() => {
		store.dispatch(listenToAuthChanges());
	}, []);

	return (
		<Provider store={store}>
			<HashRouter>
				<Navbar />

				<div className="content-wrapper">
					<Routes>
						<Route
							path="/"
							element={<Welcome />}
						></Route>

						<Route
							path="/home"
							exact
							element={<Home />}
						></Route>

						<Route
							path="/chat/:id"
							element={<Chat />}
						></Route>

						<Route
							path="/settings"
							element={<Settings />}
						></Route>
					</Routes>
				</div>
			</HashRouter>
		</Provider>
	);
}
