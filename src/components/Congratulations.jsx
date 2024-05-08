import React, { useState, useEffect } from "react";
import tick from "../assets/tick.png";
import { useNavigate } from "react-router";

function Congratulations() {
	const navigate = useNavigate();
	const [countdown, setCountdown] = useState(5);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (countdown > 0) {
				setCountdown((prevCountdown) => prevCountdown - 1);
			} else {
				navigate("/");
			}
		}, 1000);

		return () => clearTimeout(timer);
	}, [countdown, navigate]);

	return (
		<div className="flex justify-center h-screen">
			<div className="w-2/3 h-96 flex flex-col items-center justify-between">
				<div className="flex flex-col items-center gap-6">
					<img src={tick} alt="" className="h-12" />
					<div className="flex flex-col items-center">
						<span className="text-3xl font-cursive text-[#2DA950]">
							Success Submitted
						</span>
						<span className="text-5xl font-default font-semibold">
							Congratulations
						</span>
						<div className="flex flex-col items-center justify-center mt-4 w-1/2 text-center text-[#727272] font-default font-medium">
							<span>
								Your request has been successfully submitted to
								us. We will validate your information and reach
								out to your shortly with updates
							</span>
						</div>
					</div>
				</div>
				<div className="flex items-center font-default gap-1">
					<span className="text-[#727272]">
						Redirecting you to Homepage in
					</span>
					<span className="font-semibold"> {countdown} Seconds</span>
				</div>
			</div>
		</div>
	);
}

export default Congratulations;
