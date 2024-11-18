import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState(null); // To store logged-in user data

	// Simulate a login process (this should be replaced with real authentication logic)
	const login = (email, password) => {
		// Example: hardcoded validation for demonstration (replace with API or real logic)
		if (email === "test@example.com" && password === "password123") {
			setUser({ email }); // Store user data on successful login
			setLoggedIn(true);
		} else {
			alert("Invalid credentials");
		}
	};

	const logout = () => {
		setUser(null);
		setLoggedIn(false);
	};

	return <UserContext.Provider value={{ isLoggedIn, login, logout, user }}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
	children: PropTypes.node.isRequired // Ensure children is a valid React node
};

// Passing ke elemet atau komponen yang dibawahnya parent komponen

{
	/* <MyGallery/> */
}

// function MyGallery(){
//   const data = [{
//     name: Haikal,
//     imageUrl: https://google.com/aaadfds,
//     alt: foto haikal
//   }]
//   return (
//     <>
//       <MyProfile  profile={data}/>
//     </>
//   )
// }
// function MyProfile({profile}){
//   return (
//     <>
//       <MyPhoto imageUrl={profile.imageUrl} alt={profile.alt} />
//     </>
//   )
// }
// function MyPhoto({imageUrl, alt}){
//   return (
//     <>
//      <img src={imageUrl} alt={alt} />
//     </>
//   )
// }
