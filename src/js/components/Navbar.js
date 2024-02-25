import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/auth";

export default function Navbar() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(({ auth }) => auth.user);

	return (
		<div className="chat-navbar">
			<nav className="chat-navbar-inner">
				<div className="chat-navbar-inner-left">
					<button
						className="btn btn-outline-primary"
						onClick={() => navigate(-1)}
					>
						Back
					</button>

					<button
						onClick={() => navigate("/settings")}
						className="btn btn-outline-success ml-2"
					>
						Settings
					</button>
				</div>
				<div className="chat-navbar-inner-right">
					<span className="logged-in-user">Hi User</span>

					<button
						onClick={() => navigate("/")}
						className="btn btn-outline-success ml-2"
					>
						Login
					</button>

					{user && (
						<button
							onClick={() => dispatch(logout())}
							className="btn btn-outline-danger ml-2"
						>
							Logout
						</button>
					)}
				</div>
			</nav>
		</div>
	);
}
