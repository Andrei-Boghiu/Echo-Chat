import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

console.log(firebase);
console.log(auth);

async function createUserProfile(userProfile) {
	try {
		const userProfileRef = doc(db, "profiles", userProfile.uid);
		await setDoc(userProfileRef, userProfile);

		console.log("User profile created:", userProfile);
		return userProfile;
	} catch (error) {
		console.error("Error creating user profile:", error);
		throw error;
	}
}

export async function register({ email, password, username, avatar }) {
	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);

		console.log(userCredential);
		console.log("User registered:", userCredential.user.email);

		const profile = { uid: userCredential.user.uid, username, email, avatar, joinedChats: [] };
		console.log(profile);

		await createUserProfile(profile);

		console.log(`Profile Created Successfully`);

		return userCredential.user;
	} catch (error) {
		console.error(`Registration Failed: ${error}`);
		return Promise.reject(error);
	}
}