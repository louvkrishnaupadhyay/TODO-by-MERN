import React from 'react';
import { useNavigate } from 'react-router-dom';

const Edituser = () => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate("/Adduser")}>Adduser</button>
            <button onClick={() => navigate("/")}>Homepage</button>
            <div>Edituser</div>
        </>
    )
}
export default Edituser;