import React from "react";

function Footer() {
	return (
		<div className="h-48 font-default flex items-center justify-center w-full">
			<div className="h-32 mx-4 rounded-[40px] bg-[#F5F5F5] flex justify-between w-full items-center px-8">
				<div>
					<span className="font-medium">
						&copy; Talup 2023. All Right Reserved
					</span>
				</div>
				<div className="flex gap-12">
					<span>Terms & Conditions</span>
					<span>Privacy Policy</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;
