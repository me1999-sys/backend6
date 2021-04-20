import React, { useEffect, useState } from 'react';
import Navbar from '../../molecules/NavBar';
import Card from "../../molecules/Card";
import Axios from "axios";

const Dashboard = () => {

  const [users, setUsers] = useState([]);

  useEffect (()=>{
    //Fetch
    // fetch("https://reqres.in/api/users").then((res) => res.json()).then((json) => setUsers(json.data));
    //Axios
    Axios.get("http://localhost:3005/users").then((res) => setUsers(res.data));
  }, [users]);

  const addUser = () => {
    const data = {
      avatar: "https://source.unsplash.com/random",
      email: "gracia@gmail.com",
      first_name: "gracia",
      last_name: "Palangan",
    };
    Axios.post("http://localhost:3005/users", data);
  };

  return (
    <div className="container mt-5">
      <Navbar />
      <h3>Dashboard</h3>  
      <hr />
      <button className="btn btn-primary mb-3" onClick={addUser}>Tambah User</button>
      <div className="row align-items-start">
        {
          users.map(item => (
            <Card avatar={item.avatar} fullName={`${item.first_name} ${item.last_name}`} email={item.email} />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;