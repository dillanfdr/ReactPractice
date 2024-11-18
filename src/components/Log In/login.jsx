import { useState } from "react";
import { useUser } from "../../context/UserContext"; // Import UserContext to access login function
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
	const { login } = useUser(); // Access login function from UserContext
	const navigate = useNavigate(); // Hook to navigate after login
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		// Simulate login logic here (e.g., API call)
		if (email && password) {
			login(email, password);
			navigate("/"); // Redirect to home after successful login
		} else {
			setError("Please provide both email and password.");
		}
	};

	return (
		<div className="flex justify-center items-center h-screen bg-[#121212]">
			<div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg w-96">
				<h2 className="text-2xl font-semibold text-center text-[#E0E0E0] mb-6">Log In</h2>
				{error && <p className="text-red-500 text-center mb-4">{error}</p>}
				<form onSubmit={handleLogin}>
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
					<button
						type="submit"
						className="w-full py-2 bg-[#591818] text-[#ffffff] rounded-lg hover:bg-[#3D0000] focus:outline-none"
					>
						Log In
					</button>
				</form>
				<div className="mt-4 text-center">
					<span className="text-sm text-[#E0E0E0]">
						Don&apos;t have an account?{" "}
						<Link to="/signup" className="text-[#950101] hover:font-semibold">
							Sign up
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}
