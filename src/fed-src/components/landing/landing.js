import React, { Fragment, useState, useEffect } from 'react';
import Users from '../Users/users';
import Pagination from '../../utils/Pagination/pagination';

const Landing = () => {

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then( data => {
                const moreData = [...data, ...data];
                setUsers(moreData)
            })
    }, [page]);


    const paginate = (value) => {
        setPage(value)
    }

    return (
        <Fragment>
            <Users users={users} page={page}/>
            {users && users.length > 0 && (
                <Pagination
                    numOfItems={18}
                    title={'Users'}
                    page={page}
                    action={paginate}
                />
            )}
        </Fragment>
    )
}



export default Landing;