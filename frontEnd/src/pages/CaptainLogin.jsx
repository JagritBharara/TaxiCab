import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { CaptainDataContext } from '../../context/CaptainContext';

const CaptainLogin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // const [userData,setUserData] = useState('');
    const navigate = useNavigate();
    const {captain,setCaptain} = React.useContext(CaptainDataContext);
    
    const submitHandler =async (e)=>{
        e.preventDefault();
        // setUserData({
        //     email: email,
        //     password: password
        // })
        
        const newCaptain = {
            email: email,
            password: password
        }
        try{
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`, newCaptain)
            if(response.status===200){
                const data = response.data;
                setCaptain(newCaptain)
                localStorage.setItem('token',data.token);
                navigate('/captain-home')
            }
        }catch(err){

        }
        setEmail('');
        setPassword('');
    }


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
       <img className='w-16 mb-10' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/39aa86d1-94b8-4907-8fc3-cf68a23a1b51/d2sbuo9-9ac0ef38-c789-4730-8e2d-cae6b41d784d.png'  />
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
        <p className=''>Register As a Captain, <Link to='/captain-sighup' className='text-blue-600 font-semibold'>Create New Account</Link></p>
       </div>

       <div>
        <Link to='/login' className='flex items-center justify-center bg-green-400 text-white mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign In as User</Link>
       </div>
    </div>
  )
}

export default CaptainLogin