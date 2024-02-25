import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function Welcome() {
	const [loginView, setLoginView] = useState(true);

	const navigate = useNavigate();

	const user = useSelector(({ auth }) => auth.user);
	const isChecking = useSelector(({ auth }) => auth.isChecking);

	useEffect(() => {
		if (!isChecking && user) {
			navigate("/home");
		}
	}, [isChecking, user, navigate]);

	if (isChecking) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className="centered-view">
			<div className="centered-container">
				{loginView ? <LoginForm /> : <RegisterForm />}

				<small className="form-text text-muted mt-2">
					{loginView ? "Not registered yet?" : "Already registered?"}
					<span
						className="btn-link ml-2"
						onClick={() => setLoginView(!loginView)}
					>
						{loginView ? "Register" : "Login"}
					</span>
				</small>
			</div>
		</div>
	);
}
