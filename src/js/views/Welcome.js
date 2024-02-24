import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function Welcome() {
	const [loginView, setLoginView] = useState(true);

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
