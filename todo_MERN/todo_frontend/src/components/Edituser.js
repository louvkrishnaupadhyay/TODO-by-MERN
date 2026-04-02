import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Edituser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [flag, setFlag] = useState(false);

    const editHandler = (e, _id, key) => {
        const editedData = user.find((item) => item._id === _id);
        let payload = { ...editedData, [key]: e.target.innerHTML };
        axios.put("http://localhost:3002/", payload)
        .then((res) => {
            setUser(editedData);
            setFlag(!flag);
        })
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        axios.get("http://localhost:3002/")
        .then((res) => {
            console.log(res);
            setUser(res.data.todos);
        })
        .catch((err)=> console.log(err));
    }, [flag]);

    return (
        <>
            <button onClick={() => navigate("/Adduser")}>Adduser</button>
            <button onClick={() => navigate("/")}>Homepage</button>
            <div>Edituser</div>

            <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
              {user.length > 0 ? user && user.map((post) => {    // THERE IS IMPROVEMENT IN CONDITION
                return (
                    <tr key={post._id}>
                      <td>{post._id}</td>
                      <td contentEditable suppressContentEditableWarning onBlur={(e) => editHandler(e, post._id, "userName")}>
                        {post.userName}
                        </td>
                      <td contentEditable suppressContentEditableWarning onBlur={(e) => editHandler(e, post._id, "mobile")}>
                        {post.mobile}
                        </td>
                    
                    </tr>
                );
            }):"no data found"}
            </tbody>
            </table>
        </>
    )
}
export default Edituser;