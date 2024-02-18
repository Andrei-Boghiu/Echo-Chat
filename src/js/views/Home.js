import React from "react";
// import Navbar from "../components/Navbar";
import SidebarChatsList from "../components/SidebarChatsList";
import OverviewItemsList from "../components/OverviewItemsList";
import Title from "../components/shared/Title";

export default function Home() {
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
