import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[100%] absoulte top-0' onClick={
            ()=>{
                props.setRidePopupPanel(false);
            }
            }><i className="bg-grey-300 ri-arrow-down-wide-fill"></i>
        </h5>
        <h3 className='text-2xl font-bold'>Ride Details</h3>
        
        <div className='flex gap-5 item-center justify-between p-3 m-3 bg-yellow-400 rounded-lg'>
            <div className='text-xl'>Sarthak Gupta</div>
            <div className='text-lg font-medium'>2.5 Km</div>
        </div>

        <div className='flex justify-between flex-col item-center'>

            <div className='w-full flex gap-2'>
                <div><i className="ri-map-pin-line"></i></div>
                <div>A-16 Punjabi Bagh New Delhi</div>
                
            </div>
            <div className='w-full flex gap-2'>
                <div><i className="ri-map-pin-line"></i></div>
                <div>Vikas Puri</div>
            </div>
            <div className='w-full flex gap-2'>
                <div><i className="ri-cash-line"></i></div>
                <div>200</div>
                
            </div>
            <button onClick={()=>{
                props.setConfirmRidePopupPanel(true);
                props.setRidePopupPanel(false);
            }} 
            className='w-full bg-green-400 text-black p-2 rounded-lg mb-2 font-semibold'>ACCEPT</button>
            <button onClick={()=>{
                props.setRidePopupPanel(false);
            }} 
            className='w-full bg-gray-400 text-black p-2 rounded-lg mb-2 font-semibold'>Ignore</button>
        </div>
    </div>
  )
}

export default RidePopUp