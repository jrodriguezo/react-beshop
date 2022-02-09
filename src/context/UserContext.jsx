import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [counter, setCounter] = useState(0)

    return <UserContext.Provider value={{counter, setCounter}}>
        {children}
    </UserContext.Provider>
}

export default UserProvider