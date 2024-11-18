import { useId } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext"; // Import the custom hook for user context
import PropTypes from "prop-types";
// import "../Log In/login";
// import "../Sign Up/signup";

export default function Navbar({ onSearchChange }) {
	const inputId = useId();
	const { isLoggedIn, logout } = useUser(); // Destructure the authentication functions from context

	const handleSearchInput = (e) => {
		onSearchChange(e.target.value);
	};

	return (
		<nav className="sticky top-0 z-50 grid grid-cols-3 justify-between px-24 py-4 bg-[#3D0000] items-center">
			<ul>
				<li className="flex items-center justify-center">
					<h1 className="bg-gradient-to-r from-[#F2F4FF] via-[#7b2121] to-[#000000] text-transparent bg-clip-text mr-[100px] font-semibold text-4xl lg:text-2xl tracking-wide transform transition-all duration-300 ease-in-out hover:scale-25">
						{" "}
						Bloew&apos;s Room{" "}
					</h1>
					<Link
						to="/"
						className="text-[#F2F4FF] hover:text-[#7b2121] hover:bg-white hover:rounded-[100px] pl-5 pr-5 pt-2 pb-2 active:font-semibold active:text-[#1d2342] ml-[20px] mr-[75px]"
					>
						Home
					</Link>
				</li>
			</ul>
			<ul className="flex justify-center items-center">
				<li className="w-full">
					<input
						type="text"
						className="rounded-[100px] shadow-lg text-black active:text-black focus:text-black px-4 py-2 w-full"
						name="search"
						id={inputId}
						placeholder="Search product..."
						onChange={handleSearchInput}
					/>
				</li>
			</ul>
			{/* Conditional rendering based on authentication state */}
			{!isLoggedIn ? (
				<ul className="flex items-center justify-end gap-5">
					<li>
						<Link
							to="/Login"
							className="text-[#F2F4FF] hover:text-[#7b2121] active:text-[#1d2342] hover:bg-white hover:rounded-[100px] pl-5 pr-5 pt-2 pb-2 active:font-semibold"
						>
							Log In
						</Link>
					</li>
					<li>
						<Link
							to="/SignUp"
							className="text-[#F2F4FF] hover:text-[#7b2121] active:text-[#1d2342]  hover:bg-white hover:rounded-[100px] pl-5 pr-5 pt-2 pb-2 active:font-semibold"
						>
							Sign up
						</Link>
					</li>
				</ul>
			) : (
				<ul className="flex items-center justify-end gap-5">
					<li>
						<Link
							className="text-[#F2F4FF] hover:text-[#7b2121] active:text-[#1d2342] hover:bg-white hover:rounded-[100px] pl-5 pr-5 pt-2 pb-2 active:font-semibold"
							to="/cart"
						>
							Cart
						</Link>
					</li>
					<li>
						<Link
							to="/orders"
							className="text-[#F2F4FF] hover:text-[#7b2121] active:text-[#1d2342] hover:bg-white hover:rounded-[100px] pl-5 pr-5 pt-2 pb-2 active:font-semibold"
						>
							My Orders
						</Link>
					</li>
					<li>
						<button
							onClick={logout}
							className="text-[#F2F4FF] hover:text-[#7b2121] active:text-[#1d2342]hover:bg-white hover:rounded-[100px] pl-5 pr-5 pt-2 pb-2 active:font-semibold"
						>
							Sign out
						</button>
					</li>
				</ul>
			)}
		</nav>
	);
}

Navbar.propTypes = {
	onSearchChange: PropTypes.func.isRequired // Ensure 'onSearchChange' is passed and is a function
};
