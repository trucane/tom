import React, { Fragment, useState, useEffect, useReducer } from 'react';
import Users from '../Users/users';
import Pagination from '../../utils/Pagination/pagination';


function reducer(state, action){
    return{page:action.page}
}

const Landing = () => {
    const [users, setUsers] = useState([]);
    const [state, dispatch] = useReducer(reducer, {page:1})


    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then( data => {
                const moreData = [...data, ...data];
                setUsers(moreData)
            })

    }, []);

    return (
        <Fragment>
            <Users users={users} page={state.page} />
            {users && users.length > 0 && (
                <Pagination
                    numOfItems={users.length}
                    title={'Users'}
                    page={state.page}
                    action={dispatch}
                />
            )}
        </Fragment>
    )
}



export default Landing;