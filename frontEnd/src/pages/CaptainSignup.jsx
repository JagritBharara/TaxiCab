
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../../context/CaptainContext';

const UserSignup = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('car'); // Default to 'car'

    const navigate = useNavigate();

    const {setCaptain} = React.useContext(CaptainDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();

        const newCaptain = {
            fullname: {
                firstname,
                lastname,
            },
            email,
            password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: parseInt(vehicleCapacity),
                vehicleType,
            },
        };

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, newCaptain);
            if (response.status === 201) {
                const data = response.data;
                setCaptain(data.captain);
                localStorage.setItem('token', data.token);
                navigate('/captain-home');
            }
        } catch (error) {
            console.error(error);
        }

        // Reset form fields
        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('car');
    };

    return (
        <div className="p-5 h-screen flex flex-col justify-between">
            <div>
                <img
                    className="w-16 mb-0"
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/39aa86d1-94b8-4907-8fc3-cf68a23a1b51/d2sbuo9-9ac0ef38-c789-4730-8e2d-cae6b41d784d.png"
                />
                <form onSubmit={submitHandler}>
                    <h3 className="text-base font-medium mb-1">What's your Name</h3>
                    <div className="flex gap-2 mb-2">
                        <input
                            required
                            type="text"
                            placeholder="First Name"
                            className="bg-[#eeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-base"
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            required
                            type="text"
                            placeholder="Last Name"
                            className="bg-[#eeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-base"
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <h3 className="text-base font-medium mb-1">What's your email</h3>
                    <input
                        required
                        type="email"
                        placeholder="email@example.com"
                        className="bg-[#eeee] mb-2 rounded px-4 py-2 border w-full text-base placeholder:text-base"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h3 className="text-base font-medium mb-1">Enter Password</h3>
                    <input
                        required
                        type="password"
                        placeholder="password"
                        className="bg-[#eeee] mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='flex gap-2'>
                        <div className='w-1/2'>
                            <h3 className="text-base font-medium mb-1 ">Vehicle Color</h3>
                            <input
                                required
                                type="text"
                                placeholder="Vehicle Color"
                                className="bg-[#eeee] mb-2 rounded px-4 py-2 border w-full text-base placeholder:text-base"
                                value={vehicleColor}
                                onChange={(e) => setVehicleColor(e.target.value)}
                            />
                        </div>
                        <div className='w-1/2'>
                            <h3 className="text-base font-medium mb-1 ">Vehicle Capacity</h3>
                            <input
                                required
                                type="number"
                                min="1"
                                placeholder="Vehicle Capacity"
                                className="bg-[#eeee] mb-2 rounded px-4 py-2 border w-full text-base placeholder:text-base"
                                value={vehicleCapacity}
                                onChange={(e) => setVehicleCapacity(e.target.value)}
                            />
                        </div>
                        
                    </div>
                    
                    <h3 className="text-base font-medium mb-1">Vehicle Plate</h3>
                    <input
                        required
                        type="text"
                        placeholder="Vehicle Plate"
                        className="bg-[#eeee] mb-2 rounded px-4 py-2 border w-full text-base placeholder:text-base"
                        value={vehiclePlate}
                        onChange={(e) => setVehiclePlate(e.target.value)}
                    />

                    

                    <h3 className="text-base font-medium mb-1">Vehicle Type</h3>
                    <select
                        required
                        className="bg-[#eeee] mb-2 rounded px-4 py-2 border w-full text-base placeholder:text-base"
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                    >
                        <option value="car">Car</option>
                        <option value="auto">Auto</option>
                        <option value="bike">Bike</option>
                    </select>

                    <button
                        className="bg-black text-white mb-2 font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base"
                    >
                        Sign Up
                    </button>
                </form>
                <p>
                    Already Captain,{' '}
                    <Link to="/captain-login" className="text-blue-600 font-semibold">
                        Login In
                    </Link>
                </p>
            </div>

            <div>
                <Link
                    to="/login"
                    className="flex items-center justify-center bg-green-400 text-white mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
                >
                    Sign In as User
                </Link>
            </div>
        </div>
    );
};

export default UserSignup;
