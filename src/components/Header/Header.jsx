import React from "react";
import Logo from "../../assets/Logo.svg";
import close from "../../assets/close.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header({ home, register, congratulations }) {
	const navigate = useNavigate();

	const closeHandler = () => {
		navigate("/");
	};

	return (
		<div className="h-32 flex items-center justify-center font-default">
			<div
				className={`flex items-center justify-between h-24 w-full mx-4 pl-12 pr-6 rounded-full ${
					register || congratulations ? "" : "border"
				}`}
			>
				<div>
					<img src={Logo} alt="" />
				</div>
				{home && (
					<div className="flex gap-4">
						<Link to={"/register"}>
							<div className="border w-40 h-16 rounded-full flex items-center justify-center hover:bg-[#F1F1F1] cursor-pointer">
								<span>Get Projects</span>
							</div>
						</Link>
						<div className="bg-black w-40 text-white h-16 rounded-full flex items-center justify-center hover:bg-[#4E4E4E] cursor-pointer">
							<span>Onboard Talent</span>
						</div>
					</div>
				)}
				{register && (
					<div
						onClick={closeHandler}
						className="flex gap-4 cursor-pointer border h-12 w-12 items-center justify-center rounded-full"
					>
						<img src={close} alt="" className="h-8" />
					</div>
				)}
			</div>
		</div>
	);
}

export default Header;
