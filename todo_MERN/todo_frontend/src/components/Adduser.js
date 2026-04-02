import React from 'react';
import { useNavigate } from 'react-router-dom';

const Adduser = () => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate("/")}>Homepage</button>
            <button onClick={() => navigate("/Edituser")}>Edituser</button>
            <div>Adduser</div>
        </>
    )
};

export default Adduser;