import React, { useRef, useState, useEffect } from 'react';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfrimRide from '../components/ConfrimRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';


const Home = () => {
    const [pickup, setPickup] = useState('');
    const [drop, setDrop] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    const panelRef = useRef(null);
    const vehiclePanelRef = useRef(null);
    const confirmRidelRef = useRef(null);
    const panelCloserRef = useRef(null);
    const vehicleFoundRef = useRef(null);
    const waitingForDriverRef = useRef(null);
    const [vehiclePanelOpen,setVehiclePanelOpen] = useState(false);
    const [confirmRidePanel,setConfirmRidePanel] = useState(false);
    const [vehicleFound,setVehicleFound] = useState(false);
    const [waitingForDriver,setWaitingForDriver] = useState(false);

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

    useGSAP(function(){
      if(confirmRidePanel){
        gsap.to(confirmRidelRef.current,{
          transform:'translateY(0)'
        })
      }else{
        gsap.to(confirmRidelRef.current,{
          transform:'translateY(100%)'
        })
      }
    },[confirmRidePanel])

    useGSAP(function(){
      if(vehicleFound){
        gsap.to(vehicleFoundRef.current,{
          transform:'translateY(0)'
        })
      }else{
        gsap.to(vehicleFoundRef.current,{
          transform:'translateY(100%)'
        })
      }
    },[vehicleFound])

    useGSAP(function(){
      if(waitingForDriver){
        gsap.to(waitingForDriverRef.current,{
          transform:'translateY(0)'
        })
      }else{
        gsap.to(waitingForDriverRef.current,{
          transform:'translateY(100%)'
        })
      }
    },[waitingForDriver])

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
              <VehiclePanel confirmRidePanel={confirmRidePanel} setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
            </div>

            <div ref={confirmRidelRef} className='fixed py-6 w-full z-10 bottom-0 p-3 bg-white translate-y-full'>
                <ConfrimRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
            </div>

            <div ref={vehicleFoundRef} className='fixed py-6 w-full z-10 bottom-0 p-3 bg-white translate-y-full'>
              <LookingForDriver setVehicleFound={setVehicleFound}/>
            </div>

            <div ref={waitingForDriverRef} className='fixed py-6 w-full z-10 bottom-0 p-3 translate-y-full bg-white '>
              <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
            </div>

        </div>
    );
};

export default Home;
