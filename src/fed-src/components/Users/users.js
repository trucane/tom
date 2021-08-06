import React, { Fragment, useState, useEffect } from 'react';
import User from './user';




const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then( data => {setUsers(data)})
    }, []);

    return(
        <Fragment>

            { users && users[0]
                ? users.map( (user, i) => <User key={user.id} data={user}/>)
                
                : <div>No Users</div>
            }
    </Fragment>
    )
}


export default Users;

