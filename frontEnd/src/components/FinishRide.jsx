import React from 'react'
import { Link } from 'react-router-dom';

const FinishRide = () => {
  return (
    <div className='h-screen w-screen p-5'>
        <h3 className='text-2xl font-bold m-5'>Details</h3>
        
        <div className='flex gap-5 item-center justify-center p-5 m-5 bg-yellow-400 rounded-lg'>
            <div className='text-xl'>Sarthak Gupta</div>

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
                

                    <Link to='/captain-home' onClick={()=>{
                        
                    }} 
                    className='w-[full] text-center bg-green-400 text-black p-3 rounded-lg mb-2 font-semibold'>COLLECTED CASH</Link>
                    <p className='text-lg text-red-500 mt-6'>Click On Collected Cash if Payment is Completed</p>
                    

            </div>
            
            
            
        </div>
    </div>
  )
}

export default FinishRide