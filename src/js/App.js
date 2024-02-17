import React from "react";
import Home from "./views/Home";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

export default function App() {
	return (
		<HashRouter>
			<Navbar />

			<div className="content-wrapper">
				<Routes>
					<Route
						path="/settings"
						element={<h1>Settings</h1>}
					></Route>

					<Route
						path="/login"
						element={<h1>Login</h1>}
					></Route>

					<Route
						path="/register"
						element={<h1>register</h1>}
					></Route>

					<Route
						path="/"
						element={<Home />}
					></Route>
				</Routes>
			</div>
		</HashRouter>
	);
}
