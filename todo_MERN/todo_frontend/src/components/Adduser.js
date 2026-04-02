import axios from 'axios';
import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Adduser = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [mobile, setMobile] = useState("");

    const addUserHandler = () => {
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
        <>
            <button onClick={() => navigate("/")}>Homepage</button>
            <button onClick={() => navigate("/Edituser")}>Edituser</button>
            <div>Adduser</div>
            <br />
            <br/>
            <label>userName</label>
            <input type='text' onChange={(e) => setUserName(e.target.value)} />
            <label>mobile</label>
            <input type='text' onChange={(e) => setMobile(e.target.value)} />

            <button onClick={addUserHandler}>Add User</button>
        </>
    )
};

export default Adduser;