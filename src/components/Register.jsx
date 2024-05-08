import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import error from "../assets/error.png";
import { useNavigate } from "react-router";

function Register() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		getValues,
		formState: { isValid },
	} = useForm({
		mode: "onChange",
	});
	const [errors, setErrors] = useState({});

	const validationSchema = Yup.object({
		name: Yup.string().required("Name is required"),
		email: Yup.string()
			.required("Email is required")
			.email("Enter a valid email address"),
	});

	const registerHandler = async (formData) => {
		try {
			await validationSchema.validate(formData, { abortEarly: false });
			setErrors("");
			navigate("/register/congratulations");
		} catch (error) {
			console.log("Error while registering user :: ", error);
			const newErrors = {};
			error.inner.forEach((err) => {
				newErrors[err.path] = err.message;
			});
			setErrors(newErrors);
		}
	};

	return (
		<div className="flex justify-center h-screen font-default">
			<div className="w-2/3 flex flex-col items-center">
				<span className="text-3xl text-[#2DA950] font-cursive">
					Registration From
				</span>
				<span className="text-5xl font-semibold text-[#1C1C1C] font-default">
					Start your success
				</span>
				<span className="text-5xl font-semibold text-[#1C1C1C] font-default">
					Journey Here!
				</span>
				<form
					onSubmit={handleSubmit(registerHandler)}
					className="flex flex-col items-center gap-4 mt-8 w-1/2"
				>
					<div className="w-3/4 flex flex-col gap-1">
						<input
							placeholder="Enter your name"
							className="h-16 w-full px-8 font-default outline-[#537FF1] flex items-center rounded-[64px] bg-[#EFEFEF] text-black font-semibold placeholder:font-medium"
							{...register("name", { required: true })}
						/>
						{errors.name && (
							<div className="error flex items-center font-semibold text-[#FF0808] gap-2">
								<img src={error} alt="" />
								<span>{errors.name}</span>
							</div>
						)}
					</div>
					<div className="w-3/4 flex flex-col gap-1 font-default">
						<input
							placeholder="Enter your email"
							className="h-16 w-full px-8 font-default outline-[#537FF1] flex items-center rounded-[64px] bg-[#EFEFEF] text-black font-semibold placeholder:font-medium"
							{...register("email", { required: true })}
						/>
						{errors.email && (
							<div className="error flex items-center font-semibold text-[#FF0808] gap-2">
								<img src={error} alt="" />
								<span>{errors.email}</span>
							</div>
						)}
					</div>
					<button
						className={`h-16 w-3/4 px-8 font-default font-medium text-white flex items-center justify-center rounded-[64px] ${
							isValid ? "bg-[#1C1C1C]" : "bg-[#C9C9C9]"
						} mt-4`}
						disabled={!isValid}
					>
						<span>Submit</span>
					</button>
				</form>
			</div>
		</div>
	);
}

export default Register;
