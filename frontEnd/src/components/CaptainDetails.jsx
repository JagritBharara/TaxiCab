import React from 'react'

const CaptainDetails = () => {
  return (
    <div className='flex justify-between flex-col item-center p-3'>
        <div className='flex justify-between items-center'>
        <img className='h-14 w-15 p-2' src='https://www.shutterstock.com/image-illustration/realistic-sport-car-isolated-on-600nw-2505680187.jpg'  />
        <div className='text-right'>
            <h2 className='text-lg font-medium'>Piyush Patel</h2>
        </div>
        </div>
        
        <div className='w-full flex flex-col gap-2 p-5'>
            
            <div className='flex gap-1'>
            <div className='text-2xl'><i className="ri-cash-line"></i></div>
            <h3 className='text-xl font-semibold'>₹ 2000</h3>
            <p className='text-lg'>Earned</p>
            </div>
            <div className='flex gap-1'>
            <div className='text-2xl'><i className="ri-speed-up-line"></i></div>
            <h2 className='text-xl'>55 Km/hr</h2>
            </div>
            <div className='flex gap-1'>
            <div className='text-2xl'><i className="ri-booklet-line"></i></div>
            <h2 className='text-xl font-semibold'>7 hr</h2>
            <p className='text-lg'>Hours Online</p>
            </div>
            
            
        </div>
        <div className='w-full flex gap-2'>
            
            
        </div>

    </div>
  )
}

export default CaptainDetails