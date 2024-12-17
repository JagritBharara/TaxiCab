import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

const CaptainRiding = () => {
    const [finishRidePanel,setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);

    useGSAP(function(){
        if(finishRidePanel){
            gsap.to(finishRidePanelRef.current,{
            transform:'translateY(0)'
            })
        }else{
            gsap.to(finishRidePanelRef.current,{
            transform:'translateY(100%)'
            })
        }
    },[finishRidePanel])

  return (
    <div className='h-screen'>
        <div className='h-3/4'>
            <Link to='/home' className='fixed right-2 top-2 bg-white flex items-center justify-center p-3 rounded-full'>
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
            </Link>

            
            <div className='h-full'>
                <img className='h-full w-full object-cover' src='https://joebirch.co/wp-content/uploads/2024/09/Screenshot_20240903_165132-1-511x1024.png' />
            </div>
        </div>
        <div className='bg-yellow-300 flex flex-col justify-between h-1/4'>
        <div className='flex items-center justify-center'>
            <h3 className='font-semibold'>2.5 KM</h3>
        </div>
        <button onClick={()=>{
                setFinishRidePanel(true);
            }} 
            className='w-full bg-green-400 text-black p-2 rounded-lg mb-2 font-semibold'>COMPLETE RIDE</button>
        </div>

        <div ref={finishRidePanelRef} className='fixed py-6 w-full translate-y-full z-10 bottom-0 p-3  bg-white '>
          <FinishRide setFinishRidePanel={setFinishRidePanel} />
        </div>



        
    </div>
  )
}

export default CaptainRiding