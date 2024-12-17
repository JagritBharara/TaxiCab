import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import ConfirmRidePopup from '../components/ConfirmRidePopup'

const CaptainHome = () => {
  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);
  const [ridePopupPanel,setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel,setConfirmRidePopupPanel] = useState(false);

  useGSAP(function(){
    if(ridePopupPanel){
      gsap.to(ridePopupPanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(ridePopupPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[ridePopupPanel])

  useGSAP(function(){
    if(confirmRidePopupPanel){
      gsap.to(confirmRidePopupPanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePopupPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePopupPanel])


  return (
    <div className='h-screen'>
        
          <Link to='/home' className='fixed right-2 top-2 bg-white flex items-center justify-center p-3 rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
          </Link>

        
        <div className='h-3/5'>
            <img className='h-full w-full object-cover' src='https://joebirch.co/wp-content/uploads/2024/09/Screenshot_20240903_165132-1-511x1024.png' />
        </div>


        <div className='h-2/5 mt-5 p-2'>
          <CaptainDetails/>
        </div>

        <div ref={ridePopupPanelRef} className='fixed py-6 w-full translate-y-full z-10 bottom-0 p-3  bg-white '>
          <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
        </div>

        <div ref={confirmRidePopupPanelRef} className='fixed py-6 w-full translate-y-full z-10 bottom-0 p-3  bg-white '>
          <ConfirmRidePopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
        </div>


        
    </div>
  )
}

export default CaptainHome