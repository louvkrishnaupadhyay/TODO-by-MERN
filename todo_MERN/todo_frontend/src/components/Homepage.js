import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Homepagemodule.css';

const Homepage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3002/")
        .then((res) => {
            console.log(res);
            setUser(res.data.todos);
        })
        .catch((err)=> console.log(err));
    }, []);
    console.log("user", user);

    return (
  <div className="container">
    <h1>User Dashboard</h1>

    <div className="button-group">
      <button onClick={() => navigate("/Adduser")}>Add User</button>
      <button onClick={() => navigate("/Edituser")}>Edit User</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>User Name</th>
          <th>Mobile</th>
        </tr>
      </thead>
      <tbody>
        {user && user.map((post) => (
          <tr key={post._id}>
            <td>{post._id}</td>
            <td>{post.userName}</td>
            <td>{post.mobile}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default Homepage;