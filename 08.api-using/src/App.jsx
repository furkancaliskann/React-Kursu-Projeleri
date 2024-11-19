import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

const BASE_URL = "http://localhost:3000"

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  }

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response.data);
  }

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users/`, newUser);
    console.log("response", response.data);
  }

  const updateUser = async (userId, updatedUser) => {
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  }

  const deleteUserById = async (userId) => {
    await axios.delete(`${BASE_URL}/users/${userId}`);
  }

  useEffect(() => {
    //getAllUsers();
    //getUserById(1);
    // const newUser = {
    //   "username": "bilal",
    //   "password": "36"
    // }
    // createUser(newUser);

    // updateUser("e9d7", {
    //   "username": "yakup",
    //   "password": "5555"
    // })

    deleteUserById("031c");

  }, [])

  return (
    <div>

    </div>
  )
}

export default App
