import { createContext, useState } from "react";
import lscache from "lscache";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [counter, setCounter] = useState(lscache.get('lastCounter') || 0)
    const [storageValue, setStorageValue] = useState()
    const [colorValue, setColorValue] = useState()

    return <UserContext.Provider value={
        {
            counter, 
            setCounter,
            storageValue,
            setStorageValue, 
            colorValue, 
            setColorValue
        }}>
        {children}
    </UserContext.Provider>
}

export default UserProvider