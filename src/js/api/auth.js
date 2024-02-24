// import firebase from "firebase/app";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../db/firestore";

console.log(firebase);
console.log(auth);

export async function register({ email, password }) {
	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);

		console.log(userCredential);
		console.log("User registered:", userCredential.user.email);

		return userCredential.user;
	} catch (error) {
		console.error(`Registration Failed: ${error}`);
		return Promise.reject(error);
	}
}
