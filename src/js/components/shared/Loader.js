import React from "react";

export default function Loader({ message }) {
	return (
		<div className="loading-screen">
			<div className="loading-view">
				<div className="loading-view-container">
					<div className="mb-3">{message}</div>
				</div>
			</div>
		</div>
	);
}
