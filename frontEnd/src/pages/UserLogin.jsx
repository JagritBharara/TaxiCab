import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // const [captainData,setCaptainData] = useState('');
    const {user,setUser} = useContext(UserDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e)=>{
        e.preventDefault();
        // setCaptainData({
            // email: email,
            // password: password
        // })
        const userData = {
            email: email,
            password: password
        }
        try{
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData);
            if(response.status==200){
                const data = response.data;
                setUser(data.user);
                localStorage.setItem('token',data.token);
                navigate('/home');
            }
        }catch(err){
            console.error("Login failed:",err);
        }
        
        setEmail('');
        setPassword('');
    }


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
       <img className='w-16 mb-10' src='https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-taxi-icon-design-template-vector-isolated-illustration-png-image_2052224.jpg'  />
        <form onSubmit={(e)=>{
            submitHandler(e);
        }}>
            <h3 className='text-lg font-medium mb-2'>What's your Email</h3>
            <input required type='email' placeholder='email@example.com' 
                className='bg-[#eeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}    
            />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input required type='password' placeholder='password'
                 className='bg-[#eeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                 value={password}
                 onChange={(e)=>{
                    setPassword(e.target.value);
                }}  
                 />
            <button  className='bg-black text-white mb-5 font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base' >Login</button>
           
        </form>
        <p className=''>New Here, <Link to='/signup' className='text-blue-600 font-semibold'>Create New Account</Link></p>
       </div>

       <div>
        <Link to='/captain-login' className='flex items-center justify-center bg-blue-400 text-white mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign In as Captain</Link>
       </div>
    </div>
  )
}

export default UserLogin