import React, { useRef, useState, useEffect } from 'react';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';


const Home = () => {
    const [pickup, setPickup] = useState('');
    const [drop, setDrop] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    const panelRef = useRef(null);
    const vehiclePanelRef = useRef(null);
    const panelCloserRef = useRef(null);
    const [vehiclePanelOpen,setVehiclePanelOpen] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        // Add form submission logic if needed
    };

    useEffect(() => {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24,
                duration: 0.5,
            });
            gsap.to(panelCloserRef.current,{
              opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0,
                duration: 0.5,
            });
            gsap.to(panelCloserRef.current,{
              opacity: 0
            })
        }
    }, [panelOpen]);

    useGSAP(function(){
      if(vehiclePanelOpen){
        gsap.to(vehiclePanelRef.current,{
          transform:'translateY(0)'
        })
      }else{
        gsap.to(vehiclePanelRef.current,{
          transform:'translateY(100%)'
        })
      }
    },[vehiclePanelOpen])

    return (
        <div className="h-screen relative overflow-hidden">
            <div>
                <img
                    className="w-screen h-screen"
                    src="https://joebirch.co/wp-content/uploads/2024/09/Screenshot_20240903_165132-1-511x1024.png"
                    alt="Background"
                />
            </div>


            <div className="w-full absolute h-screen top-0 flex flex-col justify-end">
                <div className="h-[30%] p-5 bg-white relative">
                    <h5 ref={panelCloserRef} onClick={()=>{
                      setPanelOpen(false);
                    }} className='absolute opacity-0 top-2 right-5 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
                    <h4 className="text-2xl font-semibold">Find A Trip</h4>
                    <form
                        onSubmit={(e) => {
                            submitHandler(e);
                        }}
                    >
                        <input
                            onClick={() => setPanelOpen(true)}
                            value={pickup}
                            onChange={(e) => setPickup(e.target.value)}
                            className="bg-[#eee] px-12 py-2 text-base rounded-lg mb-2 mt-2 w-full"
                            type="text"
                            placeholder="Enter Pickup Location"
                        />
                        <input
                            onClick={() => setPanelOpen(true)}
                            value={drop}
                            onChange={(e) => setDrop(e.target.value)}
                            className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full"
                            type="text"
                            placeholder="Enter Destination"
                        />
                    </form>
                </div>
                <div ref={panelRef} className="h-0 bg-white">
                    <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
                </div>
            </div>

            <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 p-3 bg-white translate-y-full'>
              <h3 className='text-2xl font-seimbold'>Choose a vehicle</h3>
              <div className='flex w-full mb-2 p-3 border-2 active:border-black rounded-xl justify-center items-center '>
                <img className='h-20 w-20 p-2' src='https://www.shutterstock.com/image-illustration/realistic-sport-car-isolated-on-600nw-2505680187.jpg'  />
                <div className='ml-5 w-1/2'>
                  <h4 className='font-medium'>Car <span><i className="ri-user-location-line"></i>4</span></h4>
                  <h5>2 mins Away</h5>
                </div>
                <h3 className='text-xl font-semibold'>Rs200</h3>
              </div>
              <div className='flex w-full mb-2 p-3 border-2 active:border-black rounded-xl justify-center items-center '>
                <img className='h-20 w-20 p-2' src='https://totalpngs.com//public/uploads/preview/yamaha-mt15-bike-png-1-11651302484xqtxryyfdv.png'  />
                <div className='ml-5 w-1/2'>
                  <h4 className='font-medium'>Moto <span><i className="ri-user-location-line"></i>1</span></h4>
                  <h5>2 mins Away</h5>
                </div>
                <h3 className='text-xl font-semibold'>Rs50</h3>
              </div>
              <div className='flex w-full mb-2 p-3 border-2 active:border-black rounded-xl justify-center items-center '>
                <img className='h-25 w-20 p-2' src='https://images.jdmagicbox.com/quickquotes/images_main/cng-auto-rickshaw-380251422-oz5um.png'  />
                <div className='ml-5 w-1/2'>
                  <h4 className='font-medium'>Auto <span><i className="ri-user-location-line"></i>3</span></h4>
                  <h5>2 mins Away</h5>
                </div>
                <h3 className='text-xl font-semibold'>Rs100</h3>
              </div>
            </div>

        </div>
    );
};

export default Home;
