import React, { useState } from "react";
import image1 from "../../images/image1.png";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerApi } from "../../api/Api";

const RegistrationForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();

  //submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstname === "") {
      toast.error("First Name is required !");
    } else if (lastname === "") {
      toast.error("Last Name is required !");
    } else if (username === "") {
      toast.error("Username is required !");
    } else if (email === "") {
      toast.error("Email is required !");
    } else if (password.length < 6) {
      toast.error("Password must be greater then 6 !");
    } else if (confirmpassword === "") {
      toast.error("Confirm Password is required !");
    } else if (password !== confirmpassword) {
      toast.error("Passwords do not match !");
    } else if (!terms) {
      toast.error("You must agree to the terms of service");
    } else {
      localStorage.setItem("firstname", firstname);
      localStorage.setItem("lastname", lastname);
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("confirmpassword", confirmpassword);
      localStorage.setItem("terms", terms);
      toast.success("Registration successful");

      // json  data
      const data = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: password,
        confirmpassword: confirmpassword,
        terms: terms,
      };

      registerApi(data).then((res) => {
        console.log(res);
      });

      // Navigate to login page upon successful registration
      navigate("/login");
    }
  };

  return (
    <div className="container mt-3 rounded-5">
      <div className="mini-container py-5 rounded">
        <div className="row">
          <div className="col-md-6">
            <img className="left-form " src={image1} alt="" />
          </div>
          <div className="col-md-6">
            <div className="right-part ">
              <h2>Register</h2>
              <p>Please complete to create your account</p>
              <form>
                <div className="form-row ">
                  <div className="form-group  col-md-6">
                    <input
                      type="text"
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
                <Form.Check
                  type="checkbox"
                  label={
                    <span>
                      I agree to all statements included in{" "}
                      <a href="#">terms of service</a>.
                    </span>
                  }
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                />
                <button
                  onClick={handleSubmit}
                  className="btn bg-primary mt-3"
                  disabled={
                    !firstname ||
                    !lastname ||
                    !username ||
                    !email ||
                    !password ||
                    !confirmpassword ||
                    !terms
                  }
                >
                  SIGN UP
                </button>
                <Link to="/login" className="ml-5">
                  I am already a member
                </Link>
              </form>
              <p className="para mt-5">
                2018 Blue Heights Properties All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegistrationForm;
