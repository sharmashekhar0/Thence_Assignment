import React from "react";
import CongratulationHeader from "../Header/CongratulationsHeader";

function Layout(props) {
	return (
		<>
			<CongratulationHeader />
			{props.children}
		</>
	);
}

export default Layout;
