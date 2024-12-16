import React from 'react'

const ConfrimRide = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[100%] absoulte top-0' onClick={
            ()=>{
                props.setConfirmRidePanel(false);
            }
            }><i className="bg-grey-300 ri-arrow-down-wide-fill"></i>
        </h5>
        <h3 className='text-2xl font-bold'>Confirm Ride</h3>
        <div className='flex justify-between flex-col item-center'>
            <img className='h-30 w-50 p-2' src='https://www.shutterstock.com/image-illustration/realistic-sport-car-isolated-on-600nw-2505680187.jpg'  />
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
                props.setVehicleFound(true);
                props.setConfirmRidePanel(false);
            }} 
            className='w-full bg-green-400 text-black p-2 rounded-lg font-semibold'>CONFIRM</button>
        </div>
    </div>
  )
}

export default ConfrimRide