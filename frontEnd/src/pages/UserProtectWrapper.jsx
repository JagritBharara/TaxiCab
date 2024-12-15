import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProtectWrapper = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]); // Dependencies ensure this effect runs when `token` or `navigate` changes.

    // If no token, don't render children
    if (!token) {
        return null; 
    }

    return <>{children}</>;
};

export default UserProtectWrapper;
