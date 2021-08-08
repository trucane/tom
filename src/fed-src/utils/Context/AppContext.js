import React , {createContext, useState, useEffect} from 'react'
import { useContext } from 'react';

const AppContext = createContext();
const AppUpdateContext = createContext();


export function useAppContext(){
    return useContext(AppContext)
}

export function useAppUpdateContext(){
    return useContext(AppUpdateContext)
}

export function AppProvider({children}){

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect( () => {
        fetch('https://randomuser.me/api/?results=25')
            .then(response => response.json())
            .then( data => {
                const moreData = [...data.results];
                setUsers(moreData)
            })

    }, []);


    const setPagination = (value) => {
        setPage(value)
    }

    return(
        <AppContext.Provider value={{users, page}}>
            <AppUpdateContext.Provider value={setPagination}>
                {children}    
            </AppUpdateContext.Provider>
        </AppContext.Provider>
    )
}