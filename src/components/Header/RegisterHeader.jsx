import React from "react";
import Logo from "../../assets/Logo.svg";
import close from "../../assets/close.png";
import { useNavigate } from "react-router";

function Header() {
	const navigate = useNavigate();

	const closeHandler = () => {
		navigate("/");
	};

	return (
		<div className="h-32 flex items-center justify-center font-default">
			<div className="flex items-center justify-between h-24 w-full mx-4 pl-12 pr-6 rounded-full">
				<div>
					<img src={Logo} alt="" />
				</div>
				<div
					onClick={closeHandler}
					className="flex gap-4 cursor-pointer border h-12 w-12 items-center justify-center rounded-full"
				>
					<img src={close} alt="" className="h-8" />
				</div>
			</div>
		</div>
	);
}

export default Header;
