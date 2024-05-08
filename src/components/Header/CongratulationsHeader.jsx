import React from "react";
import Logo from "../../assets/Logo.svg";
import close from "../../assets/close.png";

function Header() {
	return (
		<div className="h-32 flex items-center justify-center font-default">
			<div className="flex items-center justify-between h-24 w-full mx-4 pl-12 pr-6 rounded-full">
				<div>
					<img src={Logo} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Header;
