import React, { useEffect } from "react";
// import Navbar from "../components/Navbar";
import SidebarChatsList from "../components/SidebarChatsList";
import OverviewItemsList from "../components/OverviewItemsList";
import Title from "../components/shared/Title";
import { fetchChats } from "../api/chats";

export default function Home() {
	useEffect(() => {
		fetchChats().then((data) => console.log(data));
	}, []);

	return (
		<div className="row no-gutters fh">
			<div className="col-3 fh">
				<SidebarChatsList />
			</div>
			<div className="col-9 fh">
				<Title titleText="Overview" />
				<OverviewItemsList />
			</div>
		</div>
	);
}
