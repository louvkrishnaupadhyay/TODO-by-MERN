import axios from 'axios';
import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Adduser.css';

const Adduser = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [mobile, setMobile] = useState("");

    const addUserHandler = () => {
        if (!userName || !mobile) {
        alert("All fields are required");
        return;
        }   
        let payload = {
            userName,
            mobile,
        };
        axios.post("http://localhost:3002/", payload)
        .then((res) => {
            console.log(res);
            setUserName("");
            setMobile("");
        }
        )
        .catch((err) => console.log(err));
    };
    return (
  <div className="form-container">
    <div className="nav-buttons">
      <button onClick={() => navigate("/")}>Homepage</button>
      <button onClick={() => navigate("/Edituser")}>Edit User</button>
    </div>

    <h2>Add User</h2>

    <div className="form-group">
      <label>User Name</label>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter user name"
      />
    </div>

    <div className="form-group">
      <label>Mobile</label>
      <input
        type="text"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Enter mobile number"
      />
    </div>

    <button className="submit-btn" onClick={addUserHandler}>
      Add User
    </button>
  </div>
);  
};

export default Adduser;