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
        fetch('https://randomuser.me/api/?results=25')
            .then(response => response.json())
            .then( data => {
                const moreData = [...data.results];
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