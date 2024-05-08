import React from "react";
import RegisterComponent from "../../components/Register";
import RegisterLayout from "../../components/Layout/RegisterLayout";
import Container from "../../components/Container/Container";

function Register() {
	return (
		<RegisterLayout>
			<Container>
				<RegisterComponent />
			</Container>
		</RegisterLayout>
	);
}

export default Register;
