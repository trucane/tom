import React, { useContext }  from 'react';
import Users from '../Users/users';
import { AppProvider } from '../../utils/Context/AppContext';

export default function MyApp() {
    return (
        <AppProvider>
            <Users />
            {/* {users && users.length > 0 && (
                <Pagination
                    numOfItems={users.length}
                    title={'Users'}
                    page={state.page}
                    action={dispatch}
                />
            )} */}
        </AppProvider>
    )
}