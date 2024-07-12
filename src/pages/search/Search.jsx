import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../api/Api";
import { FaUserCircle } from "react-icons/fa";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  //state for all data and searched data
  const [users, setUsers] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  //data fetch
  useEffect(() => {
    fetchUsers("")
      .then((res) => {
        // adding to the state
        if (res.statusText === "OK") {
          setUsers(res.data);
          setSearchResult(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // searching user
  const handleSearchChange = (e) => {
    // take a search query
    const query = e.target.value;

    // filtering users and updating search result
    const filteredUsers = users.filter((singleUser) => {
      // first, we get single user
      // change it to lowercase
      // 'test - typed value (query)
      return (
        singleUser.firstname.toLowerCase().includes(query.toLowerCase()) ||
        singleUser.lastname.toLowerCase().includes(query.toLowerCase())
      );
    });
    // set as search result
    setSearchResult(filteredUsers);
  };

  return (
    <>
      <div>
        <div className="container mt-3">
          <h3>Searching !</h3>
          <input
            type="text"
            onChange={handleSearchChange}
            className="form-control rounded-5"
            placeholder="search..."
          />
        </div>
        <hr />
        <h5>
          <i>
            <u>Search Result</u>
          </i>
        </h5>
        {searchResult.length > 0 ? (
          searchResult.map((user) => (
            <div key={user.id} className="card mt-2">
              <div className="card-body">
                <div className="d-flex">
                  <FaUserCircle size={"30px"} />
                </div>
                <h5 className="card-title">
                  {user.firstname} {user.lastname}
                </h5>
                <p>
                  <u>{user.email}</u>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No Users found!</p>
        )}
      </div>
    </>
  );
};

export default Search;
