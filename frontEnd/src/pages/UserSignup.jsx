import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../../context/UserContext'

const UserSignup = () => {
    const [firstname,setFirstName] = useState('');
    const [lastname,setLastNmae] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // const [userData,setUserData] = useState({});
    

    const navigate = useNavigate();
    const {user,setUser} = React.useContext(UserDataContext);
    
    const submitHandler = async (e)=>{
        e.preventDefault();

        const newUser = {
            fullname:{
                firstname: firstname,
                lastname: lastname
            },
            email:email,
            password: password
        }

        // setUserData({
        //     fullName:{
        //         firstname: firstname,
        //         lastname: lastname
        //     },
        //     email:email,
        //     password: password
        // })
        // console.log(userData); //will give the previous value of userData for the latest value use useEffect 
        // i.e it will change it on submiting

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);
        if(response.status===201){
            const data = response.data
            setUser(data.user);
            localStorage.setItem('token',data.token);
            navigate('/home');
        }

        setEmail('');
        setFirstName('');
        setLastNmae('');
        setPassword('');

        
    }


  return (
    <div className='p-5 h-screen flex flex-col justify-between'>
       <div>
       <img className='w-16 mb-2' src='https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-taxi-icon-design-template-vector-isolated-illustration-png-image_2052224.jpg'  />
        <form onSubmit={(e)=>{
            submitHandler(e);
        }}>
            <h3 className='text-base font-medium mb-2'>What's your Name</h3>
            <div className='flex gap-2 mb-2'>
                <input required type='text' placeholder='First Name' 
                    className='bg-[#eeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-base'
                    value={firstname}
                    onChange={(e)=>{
                        setFirstName(e.target.value);
                    }}    
                />
                <input required type='text' placeholder='Last Name' 
                    className='bg-[#eeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-base'
                    value={lastname}
                    onChange={(e)=>{
                        setLastNmae(e.target.value);
                    }}    
                />
            </div>
           
            <h3 className='text-base font-medium mb-2'>What's your email</h3>
            <input required type='email' placeholder='email@example.com' 
                className='bg-[#eeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base'
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}    
            />
            <h3 className='text-base font-medium mb-2'>Enter Password</h3>
            <input required type='password' placeholder='password'
                 className='bg-[#eeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                 value={password}
                 onChange={(e)=>{
                    setPassword(e.target.value);
                }}  
                 />
            <button  className='bg-black text-white mb-5 font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base' >Sign Up</button>
           
        </form>
        <p className=''>Already User, <Link to='/login' className='text-blue-600 font-semibold'>Login In</Link></p>
       </div>

       <div>
        <Link to='/captain-login' className='flex items-center justify-center bg-blue-400 text-white mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign In as Captain</Link>
       </div>
    </div>
  )
}

export default UserSignup