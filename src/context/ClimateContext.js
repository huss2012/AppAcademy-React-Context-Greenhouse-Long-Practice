// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { useState, useContext, createContext } from "react";
//The context
export const climateContext = createContext();
//The custom hook
export const useClimate = () => useContext(climateContext);

//The provider
export default function ClimateProvider({ children }){
    const [temperature, setTemperature] = useState(50);

    return (
        <climateContext.Provider value={{ temperature, setTemperature }}>
            {children}
        </climateContext.Provider>
    );
}
