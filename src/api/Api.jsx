import axios from "axios";
import react, { useState } from "react";

const Api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

// making  our first api POST /Users | Registration
export const registerApi = (data) => Api.post("/users", data);

//login Api
export const loginApi = (email) => Api.get(`/users?email=${email}`);

//fetch user api
export const fetchUsers = () => Api.get("/users");

//complete URL : http:..localhost:5000/users
