import * as api from "../api/auth";

export const registerUser = (formData) => (dispatch) =>
	api.register(formData).then((user) => {
		dispatch({ type: "AUTH_REGISTER_SUCCESS" });
		return user;
	});

export const listenToAuthChanges = () => (dispatch) => {
	dispatch({ type: "AUTH_ON_INIT" });
	api.onAuthStateChange((authUser) => {
		if (authUser) {
			dispatch({ type: "AUTH_ON_SUCCESS", user: authUser });
			console.log("Logged in");
		} else {
			dispatch({ type: "AUTH_ON_ERROR" });
			console.log("Logged out");
		}
	});
};
