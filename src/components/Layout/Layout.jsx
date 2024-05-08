import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Layout(props) {
	const { home, register, congratulations } = props;

	return (
		<>
			<Header
				home={home}
				register={register}
				congratulations={congratulations}
			/>
			{props.children}
			{home && <Footer />}
		</>
	);
}

export default Layout;
