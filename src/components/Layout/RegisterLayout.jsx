import React from "react";
import RegisterHeader from "../../components/Header/RegisterHeader";

function Layout(props) {
	return (
		<>
			<RegisterHeader />
			{props.children}
		</>
	);
}

export default Layout;
