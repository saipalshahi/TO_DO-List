// // import
// import React from "react";
// import { useState } from "react";
// import "./login.css";
// import { Link } from "react-router-dom";
// import Register from "./../register/Register";
// import { loginApi } from "../../api/Api";
// import Navbar from "../../components/Navbar";

// // make a arrow function (match with filename)
// const Login = () => {
//   //space for out logic

//   // making state for email and password
//   // for storing what we type
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   //state, for storing error message
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, settPasswordError] = useState("");

//   //storing changes to above variables
//   // for email
//   const handleChangeEmail = (e) => {
//     // e is event
//     setEmail(e.target.value);
//   };

//   // for password
//   const handleChangePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   // form validation
//   const validation = () => {
//     // make a state, that track if form is valid
//     let isValid = true;

//     // check email is empty
//     if (email === "") {
//       setEmailError("Email is required! ");
//       isValid = false;
//     }

//     //check password is empty
//     if (password === "") {
//       settPasswordError("Password is required !");
//       isValid = false;
//     }

//     return isValid;
//   };

//   // function for button
//   const handleClickLogin = (e) => {
//     // if button is click, don't reload
//     e.preventDefault();

//     //validation
//     if (!validation()) {
//       return; // stopping the process
//     }

//     // open dashboard  (only for testing)
//     loginApi(email)
//       .then((response) => {
//         if (response.data.length === 0) {
//           alert("user not found");
//         } else if (response.data[0].password !== password) {
//           alert("Incorrect Password");
//         } else {
//           alert("login successful");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         alert("server error");
//       });
//   };

//   return (
//     <div className="loginContainer">
//       <h3>Login to your account !</h3>
//       <form className="loginForm">
//         <label htmlFor="email">Email Address </label>
//         <input
//           onChange={handleChangeEmail}
//           type="email"
//           placeholder="Enter your email"
//         />

//         {/* Space for email error message */}
//         {emailError && <p className="errorText">{emailError}</p>}

//         <br />
//         <label htmlFor="password">Password</label>
//         <input
//           onChange={handleChangePassword}
//           type="password"
//           placeholder="Enter your password"
//         />

//         {/* Space for password error message */}
//         {passwordError && <p className="errorText">{passwordError}</p>}

//         <br />
//         <button onClick={handleClickLogin} className="loginBtn">
//           Login
//         </button>
//         <Link to={"/"}>Forget Password </Link>
//         <Link to={"/Register"}>Create new account</Link>
//       </form>
//     </div>
//   );
// };

// //export
// export default Login;

// // what we did
// // 1. Login page banaune
// // 2. Implemented CSS
// // 3. make a error for temporary saving(Input, error)
// // 4. Function for changing state
// // 5. Assigned tib respective input (onChange)
// // 6. validation (input are empty or not?, setting error)
// // 7. function for button (prevent page from reload)
// // 8. function - validation (form)
// // 9. Button - (onClick Assigned)
// // 10. task - make same for register page
// //firstName, lastName, email, phone, password and profile

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // getting email password  // Simulated stored credentials for testing
  const userName = localStorage.getItem("email") || "admin@admin.com";
  const userPassword = localStorage.getItem("password") || "admin";

  //submit function
  const handleSubmit = (e) => {
    e.preventDefault(); // it helps to prevent reload when click login button

    if (email === userName && password === userPassword) {
      toast.success("Login Success");
      navigate("/homepage");
    } else {
      toast.error("Invalid Email OR password");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h3 className="card-title text-center mb-4">Login to your account</h3>
        <form className="loginForm">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            className="btn btn-dark w-100"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </button>

          <div className="mt-3 text-center">
            <Link to="/forgetpassword">Forget Password</Link>
          </div>
          <div className="mt-2 text-center">
            <Link to="/Register">Create new account</Link>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Login;
