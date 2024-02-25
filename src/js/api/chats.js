import { db } from "../firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

export const fetchChats = async () => {
	try {
		const snapshot = await getDocs(collection(db, "chats"));
		return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
	} catch (error) {
		console.error("Error fetching chats:", error);
		throw error;
	}
};
