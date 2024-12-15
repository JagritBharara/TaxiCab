import React, { createContext, useContext, useState } from 'react'


export const CaptainDataContext = createContext();

// export const useCaptain = ()=>{
//     const context = useContext(CaptainContext);
//     if(!context){
//         throw new Error('use captain must be used in a captain provider');
//     }
//     return context;
// };

const CaptainContext = ({children}) => {

    const [captain,setCaptain] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const updateCaptain = (captain)=>{
        setCaptain(captainData);
    };

    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain
    };

  return (
    <div>
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    </div>
  )
}

export default CaptainContext