// First: import - react
import React, { useEffect, useState } from "react";
import { deleteUser, fetchUsers } from "../../api/Api";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux_storage/userSlice";
import { Link } from "react-router-dom";
import EditUserModal from "../../components/EditUserModal";

// make a function (fileName)
const Homepage = () => {
  // make a dispatch
  const dispatch = useDispatch();

  // selector (select from storage)  -----> list of users
  const users = useSelector((state) => state.users.users || []); // list of users in array format

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
  }, [dispatch]);

  // for editing users
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // function for open and close
  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  // delete user
  const handleDelete = (id) => {
    const comfirm = window.confirm("Are you sure want to delete ");
    if (!comfirm) {
      return;
    }
    // delete user
    deleteUser(id)
      .then((res) => {
        if (res.statusText === "OK") {
          alert("User Deleted");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
        alert("server error");
      });
  };
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
          {users.map((singleUser) => (
            <tr>
              <td>{singleUser.id}</td>
              <td>{singleUser.firstname}</td>
              <td>{singleUser.lastname}</td>
              <td>{singleUser.username}</td>
              <td>{singleUser.email}</td>
              <td>
                <div className="btn-group ">
                  <button
                    onClick={() => handleOpenModal(singleUser)}
                    className="btn bg-success"
                  >
                    {" "}
                    Edit
                  </button>
                  <button
                    className="btn bg-danger"
                    onClick={() => handleDelete(singleUser.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* if user click edit , then only show modal */}

      {isModalOpen && (
        <EditUserModal selectedUser={selectedUser} onClose={handleCloseModal} />
      )}

      <Link
        className="bg-danger p-2 text-bg-light rounded-2"
        style={{ textDecoration: "none" }}
        to={"/login"}
      >
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

// mapping [{user1}, {user2}]
// index: 0, 1, 2, 3, 4;

//logic for edit data
// data = table (row - button-> edit)
// select that specific data
//
