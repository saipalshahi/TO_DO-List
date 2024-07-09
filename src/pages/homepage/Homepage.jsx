// First: import - react
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../api/Api";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux_storage/userSlice";

// make a function (fileName)
const Homepage = () => {
  // make a dispatch
  const dispatch = useDispatch();

  // selector (select from storage)  -----> list of users
  const users = useSelector((state) => state.users.users);

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
      <table className="table">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>JohnDoe</td>
            <td>john.doe@gmail.com</td>
            <td>
              <div className="btn-group ">
                <button className="btn bg-success"> Edit</button>
                <button className="btn bg-danger">Delete</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>John</td>
            <td>Doe</td>
            <td>JohnDoe</td>
            <td>john.doe@gmail.com</td>
            <td>
              <div className="btn-group ">
                <button className="btn bg-success"> Edit</button>
                <button className="btn bg-danger">Delete</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>JohnDoe</td>
            <td>john.doe@gmail.com</td>
            <td>
              <div className="btn-group ">
                <button className="btn bg-success"> Edit</button>
                <button className="btn bg-danger">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
