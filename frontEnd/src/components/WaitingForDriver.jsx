import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
    <h5 className='p-1 text-center w-[100%] absoulte top-0' onClick={
        ()=>{
            props.setWaitingForDriver(false);
        }
        }><i className="bg-grey-300 ri-arrow-down-wide-fill"></i>
    </h5>
    <div className='flex justify-between flex-col item-center'>
        <div className='flex justify-between items-center'>
        <img className='h-14 w-15 p-2' src='https://www.shutterstock.com/image-illustration/realistic-sport-car-isolated-on-600nw-2505680187.jpg'  />
          <div className='text-right'>
            <h2 className='text-lg font-medium'>Captain Piyush</h2>
            <h4 className='text-xl font-semibold'>DL AB 1299</h4>
            <p className='text-sm'>BMW A-1</p>
          </div>
        </div>
        
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

    </div>
</div>
  )
}

export default WaitingForDriver