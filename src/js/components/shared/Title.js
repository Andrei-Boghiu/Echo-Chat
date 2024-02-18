import React from "react";

export default function Title({ titleText }) {
	return (
		<div className="chat-name-container">
			<span className="name">{titleText}</span>
		</div>
	);
}
