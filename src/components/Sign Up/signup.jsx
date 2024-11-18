import { useState } from "react";
import { useUser } from "../../context/UserContext"; // Import UserContext for signup functionality
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({ onSignUpSuccess }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const { signUp } = useUser(); // Get the signUp function from context
	const navigate = useNavigate(); // Hook to navigate after signup
	const [error, setError] = useState(""); // To show errors if any

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}
		try {
			await signUp(email, password); // Perform signup
			if (onSignUpSuccess) onSignUpSuccess(); // Callback for successful signup
			navigate("/"); // Redirect to home after successful signup
		} catch (error) {
			console.error("Sign Up failed", error);
			setError("Signup failed. Please try again.");
		}
	};

	return (
		<div className="flex justify-center items-center h-screen bg-[#121212]">
			<div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg w-96">
				<h2 className="text-2xl font-semibold text-center text-[#E0E0E0] mb-6">Sign Up</h2>
				{error && <p className="text-red-500 text-center mb-4">{error}</p>}
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="email" className="block text-[#E0E0E0]">
							Email
						</label>
						<input
							type="email"
							id="email"
							className="w-full px-4 py-2 border border-[#333] rounded-lg bg-[#2A2A2A] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#3D0000]"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password" className="block text-[#E0E0E0]">
							Password
						</label>
						<input
							type="password"
							id="password"
							className="w-full px-4 py-2 border border-[#333] rounded-lg bg-[#2A2A2A] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#3D0000]"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="confirm-password" className="block text-[#E0E0E0]">
							Confirm Password
						</label>
						<input
							type="password"
							id="confirm-password"
							className="w-full px-4 py-2 border border-[#333] rounded-lg bg-[#2A2A2A] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#3D0000]"
							placeholder="Confirm your password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full py-2 bg-[#591818] text-[#ffffff] rounded-lg hover:bg-[#3D0000] focus:outline-none"
					>
						Sign Up
					</button>
				</form>
				<div className="mt-4 text-center">
					<span className="text-sm text-[#E0E0E0]">
						Already have an account?{" "}
						<Link to="/login" className="text-[#950101] hover:text-[#b13939]">
							Log in
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

SignUp.propTypes = {
	onSignUpSuccess: PropTypes.func // Optional callback function on successful signup
};

export default SignUp;
