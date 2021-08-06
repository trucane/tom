import React, {useState, useEffect } from 'react';
import User from './userBadge';
import './users.css';




const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then( data => {setUsers(data)})
    }, []);

    return(
        <div className="users">

            { users && users[0]
                ? users.map( (user, i) => <User key={user.id} data={user}/>)
                
                : <div>No Users</div>
            }
    </div>
    )
}


export default Users;

