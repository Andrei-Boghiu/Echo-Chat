import React from "react";
import { useParams } from "react-router-dom";

import ChatUsersList from "../components/ChatUsersList";
import Title from "../components/shared/Title";
import ChatMessagesList from "../components/ChatMessagesList";

export default function Chat() {
	const { id } = useParams();
	return (
		<div className="row no-gutters fh">
			<div className="col-3 fh">
				<ChatUsersList />
			</div>
			<div className="col-9 fh">
				<Title titleText={`Channel ${id}`} />
				<ChatMessagesList />
			</div>
		</div>
	);
}
