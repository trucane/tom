import React, { useContext }  from 'react';
import Users from '../Users/users';
import Pagination from '../../utils/Pagination/pagination';
import { AppProvider } from '../../utils/Context/AppContext';

export default function MyApp() {
    return (
        <AppProvider>
            <Users />
            <Pagination />
        </AppProvider>
    )
}