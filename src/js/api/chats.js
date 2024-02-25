import { db } from "../firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

export const fetchChats = () => {
	return getDocs(collection(db, "chats")).then((snapshot) =>
		snapshot.docs.map((doc) => {
			return { id: doc.id, ...doc.data() };
		})
	);
};

// export const fetchChats = () => {
// 	return db
// 		.collection("chats")
// 		.get()
// 		.then((snapshot) =>
// 			snapshot.docs.map((doc) => {
// 				return { id: doc.id, ...doc.data() };
// 			})
// 		);
// };
