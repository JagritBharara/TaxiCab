import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ConfirmRidePopup = (props) => {
    const [otp, setOtp] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault();
    }

  return (
    <div className='h-screen w-screen p-5'>
        <h3 className='text-2xl font-bold m-5'>Details</h3>
        
        <div className='flex gap-5 item-center justify-between p-5 m-5 bg-yellow-400 rounded-lg'>
            <div className='text-xl'>Sarthak Gupta</div>
            <div className='text-lg font-medium'>2.5 Km</div>
        </div>

        <div className='flex justify-between flex-col item-center'>

            <div className='w-full mt-5 mb-5 flex gap-2'>
                <div><i className="ri-map-pin-line"></i></div>
                <div>A-16 Punjabi Bagh New Delhi</div>
                
            </div>
            <div className='w-full mt-5 mb-5 flex gap-2'>
                <div><i className="ri-map-pin-line"></i></div>
                <div>Vikas Puri</div>
            </div>
            <div className='w-full flex gap-2'>
                <div><i className="ri-cash-line"></i></div>
                <div>200</div>
                
            </div>
            
            <div className='mt-5 flex flex-col gap-2 mr-4'>
                <form onSubmit={()=>{
                    submitHandler();
                }} className='flex flex-col gap-2'>
                    <input value={otp} onChange={(e)=>{
                        setOtp(e.target.value);
                    }} className='bg-[#eee] p-3 rounded-lg text-lg' type="text" placeholder='Enter OTP' />
                    <Link to='/captain-riding' onClick={()=>{
                        
                    }} 
                    className='w-[full] text-center bg-green-400 text-black p-3 rounded-lg mb-2 font-semibold'>CONFIRM</Link>
                    <button onClick={()=>{
                        props.setConfirmRidePopupPanel(false);
                    }} 
                    className='w-full bg-red-500 text-black p-3 rounded-lg mb-2 font-semibold'>CANCEL</button>
                </form>
            </div>
            
            
            
        </div>
    </div>
  )
}

export default ConfirmRidePopup