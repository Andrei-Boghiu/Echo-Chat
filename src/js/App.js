import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Login from "./views/Login";
import Register from "./views/Register";
import Settings from "./views/Settings";
import Chat from "./views/Chat";

export default function App() {
	return (
		<HashRouter>
			<Navbar />

			<div className="content-wrapper">
				<Routes>
					<Route
						path="/chat/:id"
						element={<Chat />}
					></Route>

					<Route
						path="/settings"
						element={<Settings />}
					></Route>

					<Route
						path="/login"
						element={<Login />}
					></Route>

					<Route
						path="/register"
						element={<Register />}
					></Route>

					<Route
						path="/"
						exact
						element={<Home />}
					></Route>
				</Routes>
			</div>
		</HashRouter>
	);
}
