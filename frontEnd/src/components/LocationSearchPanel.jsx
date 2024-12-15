// import React from 'react'

// const LocationSearchPanel = () => {
//   return (
//     <div>
//         <div className='flex justify-start border-gray-100 active:border-black p-2 items-center gap-2 mb-2'>
//             <h2 className='bg-[#eee] h-5 w-5 flex items-center justify-center'><i className="ri-map-pin-line"></i></h2>
//             <h4 className='text-lg'>Address , A-15 Punjabi Bagh New Delhi</h4>
//         </div>
//         <div className='flex justify-start border-white active:border-black p-2 items-center gap-2 mb-2'>
//             <h2 className='bg-[#eee] h-5 w-5 flex items-center justify-center'><i className="ri-map-pin-line"></i></h2>
//             <h4 className='text-lg'>Address , A-15 Punjabi Bagh New Delhi</h4>
//         </div>
//         <div className='flex justify-start border-white active:border-black p-2 items-center gap-2 mb-2'>
//             <h2 className='bg-[#eee] h-5 w-5 flex items-center justify-center'><i className="ri-map-pin-line"></i></h2>
//             <h4 className='text-lg'>Address , A-15 Punjabi Bagh New Delhi</h4>
//         </div>
//         <div className='flex justify-start border-white active:border-black p-2 items-center gap-2 mb-2'>
//             <h2 className='bg-[#eee] h-5 w-5 flex items-center justify-center'><i className="ri-map-pin-line"></i></h2>
//             <h4 className='text-lg'>Address , A-15 Punjabi Bagh New Delhi</h4>
//         </div>
//         <div className='flex justify-start border-white active:border-black p-2 items-center gap-2 mb-2'>
//             <h2 className='bg-[#eee] h-5 w-5 flex items-center justify-center'><i className="ri-map-pin-line"></i></h2>
//             <h4 className='text-lg'>Address , A-15 Punjabi Bagh New Delhi</h4>
//         </div>
//     </div>
//   )
// }

// export default LocationSearchPanel


import React, { useState } from 'react';

const LocationSearchPanel = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
    const locations = [
        "Address , A-15 Punjabi Bagh New Delhi",
        "Address , A-16 Punjabi Bagh New Delhi",
        "Address , A-17 Punjabi Bagh New Delhi",
        "Address , A-18 Punjabi Bagh New Delhi"
        
    ]
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      {locations.map((el, index) => (
        <div
          key={index}
          onClick={() => {
            handleClick(index)
            props.setVehiclePanelOpen(true)
            }}
          className={`flex justify-start border ${
            activeIndex === index ? 'border-black rounded-xl' : 'border-white'
          } p-2 items-center gap-2 mb-2 cursor-pointer`}
        >
          <h2 className="bg-[#eee] h-5 w-5 flex items-center justify-center">
            <i className="ri-map-pin-line"></i>
          </h2>
          <h4 className="text-lg">{el}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
