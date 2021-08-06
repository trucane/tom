import React from 'react';
import User from './userBadge';
import './users.css';




const Users = (props) => {
    return(
        <div className="users">

            { props.users && props.users[0]
                ? props.users.map( (user, i) => <User key={user.id} data={user}/>)
                
                : <div>No Users</div>
            }
    </div>
    )
}


export default Users;

