import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SidebarChatsList from "../components/SidebarChatsList";
import OverviewItemsList from "../components/OverviewItemsList";
import Title from "../components/shared/Title";
import { fetchChats } from "../actions/chats";

export default function Home() {
	const dispatch = useDispatch();
	const chats = useSelector((state) => state.chats.items);

	useEffect(() => {
		dispatch(fetchChats());
	}, [dispatch]);

	return (
		<div className="row no-gutters fh">
			<div className="col-3 fh">
				<SidebarChatsList chats={chats} />
			</div>
			<div className="col-9 fh">
				<Title titleText="Overview" />
				<OverviewItemsList chats={chats} />
			</div>
		</div>
	);
}
