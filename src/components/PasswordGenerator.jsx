import React, { useState } from "react";
import { toast } from "react-toastify";
import randomFunc from "../utils/random";

const PasswordGenerator = () => {
	const [generatedPassword, setGeneratedPassword] = useState(null);
	const [length, setLength] = useState(8);
	const [uppercase, setUppdercase] = useState(false);
	const [lowercase, setLowercase] = useState(false);
	const [number, setnumber] = useState(false);
	const [symbol, setSymbol] = useState(false);

	const handleLengthChange = (e) => {
		setLength(Number(e.target.value));
	};

	const handleCheckboxChange = (e) => {
		switch (e.target.id) {
			case "uppercase":
				setUppdercase((prevState) => !prevState);
				break;

			case "lowercase":
				setLowercase((prevState) => !prevState);
				break;

			case "number":
				setnumber((prevState) => !prevState);
				break;

			case "symbol":
				setSymbol((prevState) => !prevState);
				break;

			default:
				break;
		}
	};

	const handleGenerate = () => {
		const options = uppercase + lowercase + number + symbol;
		let password = "";

		if (options === 0 || length === 0) return;

		const types = [{ uppercase }, { lowercase }, { number }, { symbol }].filter(
			(item) => Object.values(item)[0]
		);

		for (let i = 0; i < length; i += options) {
			types.forEach((type) => {
				const functionName = Object.keys(type)[0];
				password += randomFunc[functionName]();
			});
		}

		const finalPassword = password.slice(0, length);

		setGeneratedPassword(finalPassword);
	};

	const handleCopyToClipboard = () => {
		if (generatedPassword === null) return;

		navigator.clipboard.writeText(generatedPassword);

		toast.success("Coppied to clipboard!", {
			position: "top-right",
			autoClose: 600,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	};
	return (
		<div className="w-[400px] h-[350px]">
			<p className="text-white text-center text-[30px] mb-5">
				Password Generator 🔑
			</p>
			<div className="w-full h-full rounded-lg shadow-indigo-500 shadow-lg bg-indigo-900 p-5 flex flex-col gap-2 ">
				<div className="flex items-center justify-between text-white bg-gray-800 rounded-md">
					<input
						className="bg-transparent h-11 w-100 text-white flex-1 p-5"
						type="text"
						readOnly
						id="password"
						value={generatedPassword}
					/>
					<button
						onClick={handleCopyToClipboard}
						className="bg-green-500 hover:bg-green-400 w-11 h-11 rounded-tr-md rounded-br-md inline-flex justify-center items-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
							/>
						</svg>
					</button>
				</div>
				<div className="flex flex-col items-center justify-between text-white">
					<label htmlFor="length">
						Password length: <span>{length}</span>
					</label>
					<input
						className="accent-indigo-400"
						type="range"
						id="length"
						defaultValue={length}
						onChange={handleLengthChange}
					/>
				</div>
				<div className="flex items-center justify-between text-white">
					<label htmlFor="uppercase">Inlucde uppercase letters</label>
					<input
						type="checkbox"
						id="uppercase"
						onChange={handleCheckboxChange}
					/>
				</div>
				<div className="flex items-center justify-between text-white">
					<label htmlFor="lowercase">Inlucde lowercase letters</label>
					<input
						type="checkbox"
						id="lowercase"
						onChange={handleCheckboxChange}
					/>
				</div>
				<div className="flex items-center justify-between text-white">
					<label htmlFor="number">Inlucde number</label>
					<input type="checkbox" id="number" onChange={handleCheckboxChange} />
				</div>
				<div className="flex items-center justify-between text-white">
					<label htmlFor="symbol">Inlucde symbol</label>
					<input type="checkbox" id="symbol" onChange={handleCheckboxChange} />
				</div>
				<button
					className="bg-green-500 hover:bg-green-400 active:scale-95 transition-all rounded-sm p-2 mt-5 text-lg font-bold text-white tracking-wide"
					onClick={handleGenerate}
				>
					Generate
				</button>
			</div>
		</div>
	);
};

export default PasswordGenerator;
