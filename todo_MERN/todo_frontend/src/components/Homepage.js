import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        <>
            <button onClick={() => navigate("/Adduser")}>Adduser</button>
            <button onClick={() => navigate("/Edituser")}>Edituser</button>
            <div>Homepage</div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>userName</th>
                        <th>Mobile</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {user && user.map((post)=>{
                        return (
                            <tr key={post._id}>
                                <td>{post._id}</td>
                                <td>{post.userName}</td>
                                <td>{post.mobile}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Homepage;