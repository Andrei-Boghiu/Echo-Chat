import React from "react";
// import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import OverviewPanel from "../components/OverviewPanel";
import Title from "../components/shared/Title";

export default function Home() {
	return (
		<div className="row no-gutters fh">
			<div className="col-3 fh">
				{/* CHAT LIST START */}
				<LeftSidebar />
			</div>
			<div className="col-9 fh">
				<Title />
				<OverviewPanel />
			</div>
		</div>
	);
}
