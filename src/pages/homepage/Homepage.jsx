// First: import - react
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../api/Api";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux_storage/userSlice";

// make a function (fileName)
const Homepage = () => {
  // make a dispatch
  const dispatch = useDispatch();

  //automatic user fetch  {  useState}
  // []  is dependency list, when should it run
  useEffect(() => {
    // fetch all users
    fetchUsers()
      .then((res) => {
        console.log(res.data);

        //adding user to redux
        dispatch(addUser(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1 className="text-center">This is homepage</h1>
      <Link to={"/login"} className="btn btn-outline-danger">
        Logout
      </Link>
    </>
  );
};
// Export
export default Homepage;

//logic
// 1. fetch user information
//2. automatic
//3. trigger redux storage (addUser)
//4. storage has data
// 5. fetch from storage
// 6. display in ui
