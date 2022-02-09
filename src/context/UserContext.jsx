import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [counter, setCounter] = useState(0)
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