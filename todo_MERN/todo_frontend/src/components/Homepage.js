import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate("/Adduser")}>Adduser</button>
            <button onClick={() => navigate("/Edituser")}>Edituser</button>
            <div>Homepage</div>
        </>
    );
};

export default Homepage;