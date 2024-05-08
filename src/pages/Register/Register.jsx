import React from "react";
import RegisterComponent from "../../components/Register";
import Container from "../../components/Container/Container";
import Layout from "../../components/Layout/Layout";

function Register() {
	return (
		<Layout register={true}>
			<Container>
				<RegisterComponent />
			</Container>
		</Layout>
	);
}

export default Register;
