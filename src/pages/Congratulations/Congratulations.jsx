import React from "react";
import CongratulationsComponent from "../../components/Congratulations";
import Container from "../../components/Container/Container";
import Layout from "../../components/Layout/Layout";

function Congratulations() {
	return (
		<Layout congratulations={true}>
			<Container>
				<CongratulationsComponent />
			</Container>
		</Layout>
	);
}

export default Congratulations;
