import React, { useState } from "react";
import Navbar from '../../molecules/NavBar';
import Axios from "axios";

const Adduser = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const handleSubmit = () => {
    const data = {
      avatar: "https://picsum.photos/seed/picsum/200/300",
      email: email,
      first_name: firstName,
      last_name: lastName
    };
    Axios.post("http://localhost:3005/users", data);
  };

  return (
    //JSX
    <div className="container mt-5">
      <Navbar />
      <h3 className="mt-3">Add User</h3>
      <p className="form-label mt-3">Email</p>
      <input 
        className="form-control"
        placeholder="Masukan email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="form-label mt-3">Fullname</p>
      <input
        className="form-control mb-3"
        placeholder="Masukan First Name"
        type="first_name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className="form-control"
        placeholder="Masukan Last Name"
        type="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <br />
      <button type="button" className="btn btn-primary mb-3" onClick={handleSubmit} >Add User</button>
    </div>
  );
};

export default Adduser;