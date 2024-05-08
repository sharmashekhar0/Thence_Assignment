import React, { useState } from "react";
import stylishArrow from "../assets/stylishArrow.png";

function FAQ() {
	const [isHidden, setIsHidden] = useState(false);

	const toggleVisibility = () => {
		setIsHidden((prev) => !prev);
	};

	return (
		<div className="min-h-screen flex items-center justify-center px-4 mt-40">
			<div className="flex bg-[#E8EEE7] min-h-[600px] w-full rounded-[32px] relative">
				<div className="w-1/2 font-default flex flex-col">
					<div className="flex flex-col pl-16 mt-12 gap-3 h-40 w-full">
						<span className="font-cursive text-3xl text-[#9E9D9D]">
							What's on your mind
						</span>
						<span className="text-5xl font-semibold">
							Ask Questions
						</span>
					</div>
					<img
						src={stylishArrow}
						alt=""
						className="absolute bottom-0 left-0 h-96"
					/>
				</div>
				<div className="w-1/2">
					<div className="w-full h-full px-12 py-20 font-default flex flex-col justify-between">
						<div className="flex w-full py-3 border-b border-[#D7D7D7] text-xl font-semibold items-center justify-between">
							<span>Do you offer freelancers?</span>
							<span className="text-3xl">+</span>
						</div>

						<div className="flex w-full py-3 border-b border-[#D7D7D7] text-xl font-semibold items-center justify-between">
							<span>
								What’s the guarantee that I will be satisfied
								with the hired talent?
							</span>
							<span className="text-3xl">+</span>
						</div>

						<div className="flex flex-col w-full py-3 border-b border-[#D7D7D7] text-xl font-semibold items-center justify-between">
							<div className="flex items-center justify-between w-full">
								<span>
									Can I hire multiple talents at once?
								</span>
								<span
									onClick={toggleVisibility}
									className="text-3xl cursor-pointer"
								>
									{isHidden ? "+" : "--"}
								</span>
							</div>

							{!isHidden && (
								<span className="text-sm text-[#617275] font-normal my-3">
									If unhappy with a project, communicate with
									the freelancer, allow for revisions, and
									refer to the agreement. Escalate to platform
									support if needed, considering mediation.
									Review policies, seek collaborative
									solutions for resolution.
								</span>
							)}
						</div>

						<div className="flex w-full py-3 border-b border-[#D7D7D7] text-xl font-semibold items-center justify-between">
							<span>
								Why should I not go to an agency directly?
							</span>
							<span className="text-3xl">+</span>
						</div>

						<div className="flex w-full py-3 border-b border-[#D7D7D7] text-xl font-semibold items-center justify-between">
							<span>
								Who can help me pick a right skillset and
								duration for me?
							</span>
							<span className="text-3xl">+</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FAQ;
