import Container from "../../components/Container/Container";
import React from "react";
import Main from "../../components/Main/Main";
import FAQ from "../../components/FAQ";
import Layout from "../../components/Layout/Layout";

function Home() {
	return (
		<Layout>
			<Container>
				<Main />
				<FAQ />
			</Container>
		</Layout>
	);
}

export default Home;
