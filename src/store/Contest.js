import {createContext, useState} from 'react'

export const FirebaseContest = createContext(null)

export const AuthContext = createContext(null);

export default function Context ({children}){
    const [user, setuser] = useState('hello')

    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}