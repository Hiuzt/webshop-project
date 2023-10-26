import { createContext, useState } from "react";
const adminContext = createContext({})

export const AdminProvider = ({ children }) => {
    const [roles, setRoles] = useState({})
    const [users, setUsers] = useState({})

    return (
        <adminContext.Provider value={{roles, setRoles, users, setUsers}}>
            {children}
        </adminContext.Provider>
    )
}

export default adminContext;