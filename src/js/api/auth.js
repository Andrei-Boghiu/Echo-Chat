import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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

		//console.log(userCredential);
		console.log("User registered:", userCredential.user.email);
		console.log("Creating profile...");
		const profile = { uid: userCredential.user.uid, username, email, avatar, joinedChats: [] };

		await createUserProfile(profile);

		console.log(`Profile Created Successfully`);

		return userCredential.user;
	} catch (error) {
		console.error(`Registration Failed: ${error}`);
		return Promise.reject(error);
	}
}

export const login = ({ email, password }) => signInWithEmailAndPassword(auth, email, password);

export const logout = () => auth.signOut();

export const onAuthStateChange = (onAuth) => auth.onAuthStateChanged(onAuth);
