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

    const deleteHandeler = async (_id) => {
        console.log("id", _id);
        try{
            const confirmDelete = window.confirm("Are you sur you want to delete ");
            if(!confirmDelete) return;

            await axios.delete("http://localhost:3002/", {data:{_id}});
            setUser((prev) => prev.filter((item) =>item._id !== _id));
        }
        catch(err){
            console.log(err);
        }
        
    }

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
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {user && user.map((post) => (
          <tr key={post._id}>
            <td>{post._id}</td>
            <td>{post.userName}</td>
            <td>{post.mobile}</td>
            <td>
                <button onClick={() => deleteHandeler(post._id)}>
                    Delete
                </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default Homepage;