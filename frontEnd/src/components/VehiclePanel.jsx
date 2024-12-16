import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[100%] absoulte top-0' onClick={
                ()=>{
                  props.setVehiclePanelOpen(false);
                }
              }><i className="bg-grey-300 ri-arrow-down-wide-fill"></i></h5>
              <h3 className='text-2xl font-seimbold'>Choose a vehicle</h3>
              <div onClick={
                ()=>{
                    props.setConfirmRidePanel(true);
                }
              } 
                className='flex w-full mb-2 p-3 border-2 active:border-black rounded-xl justify-center items-center '>
                <img className='h-20 w-20 p-2' src='https://www.shutterstock.com/image-illustration/realistic-sport-car-isolated-on-600nw-2505680187.jpg'  />
                <div className='ml-5 w-1/2'>
                  <h4 className='font-medium'>Car <span><i className="ri-user-location-line"></i>4</span></h4>
                  <h5>2 mins Away</h5>
                </div>
                <h3 className='text-xl font-semibold'>Rs200</h3>
              </div>
              <div onClick={
                ()=>{
                    props.setConfirmRidePanel(true);
                }
              } className='flex w-full mb-2 p-3 border-2 active:border-black rounded-xl justify-center items-center '>
                <img className='h-20 w-20 p-2' src='https://totalpngs.com//public/uploads/preview/yamaha-mt15-bike-png-1-11651302484xqtxryyfdv.png'  />
                <div className='ml-5 w-1/2'>
                  <h4 className='font-medium'>Moto <span><i className="ri-user-location-line"></i>1</span></h4>
                  <h5>2 mins Away</h5>
                </div>
                <h3 className='text-xl font-semibold'>Rs50</h3>
              </div>
              <div onClick={
                ()=>{
                    props.setConfirmRidePanel(true);
                }
              } className='flex w-full mb-2 p-3 border-2 active:border-black rounded-xl justify-center items-center '>
                <img className='h-25 w-20 p-2' src='https://images.jdmagicbox.com/quickquotes/images_main/cng-auto-rickshaw-380251422-oz5um.png'  />
                <div className='ml-5 w-1/2'>
                  <h4 className='font-medium'>Auto <span><i className="ri-user-location-line"></i>3</span></h4>
                  <h5>2 mins Away</h5>
                </div>
                <h3 className='text-xl font-semibold'>Rs100</h3>
              </div>
    </div>
  )
}

export default VehiclePanel