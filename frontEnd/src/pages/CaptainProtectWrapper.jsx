import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../../context/CaptainContext';
import axios from 'axios';

const CaptainProtectWrapper = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const { setCaptain } = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const verifyCaptain = async () => {
            if (!token) {
                navigate('/captain-login'); // Redirect if no token exists
                return;
            }

            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200 && response.data.captain) {
                    setCaptain(response.data.captain); // Set captain data
                } else {
                    throw new Error('Not a captain'); // Handle non-captain tokens
                }
            } catch (err) {
                console.error('Error fetching captain profile:', err);
                localStorage.removeItem('token'); // Clear invalid token
                navigate('/captain-login'); // Redirect to login
            } finally {
                setIsLoading(false);
            }
        };

        verifyCaptain();
    }, [token, navigate, setCaptain]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default CaptainProtectWrapper;
