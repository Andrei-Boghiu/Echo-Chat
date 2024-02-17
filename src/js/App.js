import React from "react";

export default function App() {
	const title = "Hello there,";

	function notify() {
		electron.notification.send("Hello there traveler");
	}

	return (
		<>
			<h1>{title}</h1>
			<button onClick={notify}>Sent Notification</button>
		</>
	);
}
