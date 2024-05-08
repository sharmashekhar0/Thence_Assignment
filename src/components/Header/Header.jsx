import React from "react";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="h-32 flex items-center justify-center font-default">
			<div className="flex items-center justify-between border h-24 w-full mx-4 pl-12 pr-6 rounded-full">
				<div>
					<img src={Logo} alt="" />
				</div>
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
			</div>
		</div>
	);
}

export default Header;
