import React, { useState, useEffect } from "react";
import mainLeftBg from "../../assets/mainLeftBg.png";
import sparkle from "../../assets/sparkle.png";
import rocket from "../../assets/rocket.png";
import rightArrow from "../../assets/rightArrow.png";

function Main() {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prevSlide) =>
				prevSlide === 2 ? 0 : prevSlide + 1
			);
		}, 3000); // Change slide every 5 seconds (adjust as needed)

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col">
			<div className="h-80 flex flex-col justify-center items-center">
				<span className="font-cursive font-medium text-3xl text-[#2DA950]">
					Success Stories
				</span>
				<div className="text-6xl flex flex-col items-center font-medium font-default">
					<span>Every Success journey</span>
					<span>we've encountered.</span>
				</div>
			</div>
			<div className="flex">
				<div className="w-1/2 flex items-center justify-center relative font-default">
					<img src={mainLeftBg} alt="" className="h-[460px]" />
					<div className="bg-white h-48 border w-52 absolute rounded-2xl left-7">
						<div className="relative p-8 text-left h-full w-full flex flex-col justify-between">
							<img
								src={sparkle}
								alt=""
								className="h-20 absolute top-6 left-10 -translate-x-1/2 -translate-y-1/2"
							/>
							<span className="text-4xl font-bold">40%</span>
							<p className="text-sm text-[#828282]">
								Achieved reduction in project execution time by
								optimising team availability
							</p>
						</div>
					</div>
					<div
						className="flex items-center bg-white h-16 rounded-full shadow absolute w-48 justify-center gap-4
						bottom-8 left-16"
					>
						<img src={rocket} alt="" />
						<div
							className="flex flex-col items-center
							 justify-center"
						>
							<span className="font-bold text-xl">10 DAYS</span>
							<span className="text-sm text-[#828282]">
								Staff Deployment
							</span>
						</div>
					</div>
					<div className="bg-[#002E18] text-white h-44 border border-[#3D3D3D] w-52 absolute rounded-2xl right-0 bottom-0 translate-y-10">
						<div className="relative p-5 py-8 text-left h-full w-full flex flex-col justify-between">
							<span className="text-4xl font-bold flex items-end gap-2">
								$0.5{" "}
								<span className="text-base text-[#A6A3A0]">
									MILLION
								</span>
							</span>
							<p className="text-sm text-[#CCCCCC]">
								Reduced client expenses by saving on hiring and
								employee costs.
							</p>
						</div>
					</div>
				</div>
				<div className="w-1/2 flex flex-col items-center justify-between font-default">
					<div className="flex flex-col justify-around items-start h-full">
						<div>
							<div className="flex">
								<div
									className={`flex flex-col w-80 text-3xl font-semibold transition-all duration-1000 ${
										currentSlide === 0
											? "block opacity-100"
											: "absolute opacity-0"
									}`}
								>
									<span>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Temporibus veritatis
										facilis distinctio?
									</span>
								</div>
								<div
									className={`flex flex-col w-80 text-3xl font-semibold transition-all duration-1000 ${
										currentSlide === 1
											? "block"
											: "absolute opacity-0"
									}`}
								>
									<span>
										Lorem ipsum unt praesentium cumque sequi
										reiciendis quia veritatis, a
										consequuntur atque!
									</span>
								</div>
								<div
									className={`flex flex-col w-80 text-3xl font-semibold transition-all duration-1000 ${
										currentSlide === 2
											? "block"
											: "absolute opacity-0"
									}`}
								>
									<span>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Temporibus veritatis
										facilis distinctio?
									</span>
								</div>
							</div>
							<div className="flex gap-2 mt-6">
								{[0, 1, 2].map((index) => (
									<div
										key={index}
										className={`h-3 w-3 rounded-full ${
											index === currentSlide
												? "bg-[#2DA950]"
												: "bg-[#E4E3E3] hover:bg-[#CAD0CB]"
										}`}
										onClick={() => setCurrentSlide(index)}
									></div>
								))}
							</div>
						</div>
						<div className="h-14 w-44 bg-[#1C1C1C] rounded-full text-white flex items-center justify-center gap-6 hover:bg-[#4E4E4E]">
							<span>Explore More</span>
							<img src={rightArrow} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
