import React from "react";
import CongratulationsComponent from "../../components/Congratulations";
import CongratulationsLayout from "../../components/Layout/CongratulationsLayout";
import Container from "../../components/Container/Container";

function Congratulations() {
	return (
		<CongratulationsLayout>
			<Container>
				<CongratulationsComponent />
			</Container>
		</CongratulationsLayout>
	);
}

export default Congratulations;
