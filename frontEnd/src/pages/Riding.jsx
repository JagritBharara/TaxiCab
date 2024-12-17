import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-2 top-2 bg-white flex items-center justify-center p-3 rounded-full'>
        <i className="text-lg font-medium ri-home-2-line"></i>
        </Link>
        <div className='h-1/2'>
            <img className='h-full w-full object-cover' src='https://joebirch.co/wp-content/uploads/2024/09/Screenshot_20240903_165132-1-511x1024.png' />
        </div>
        <div className='h-1/2 mt-5'>
                <div className='flex justify-between flex-col item-center p-3'>
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
                    <div>Vikas Puri</div>
                </div>
                <div className='w-full flex gap-2'>
                    <div><i className="ri-cash-line"></i></div>
                    <div>200</div>
                    
                </div>

            </div>
            <button className='w-full bg-green-400 text-black p-2 rounded-lg font-semibold'>Make A Payment</button>
        </div>
    </div>
  )
}

export default Riding