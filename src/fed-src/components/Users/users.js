import React from 'react';
import User from './userBadge';
import PropTypes from 'prop-types';
import './users.css';




const Users = (props) => {
    return(
        <div className="users">

            { props.users && props.users[0]
                ? props.users.slice((props.page - 1) * 10, props.page * 10).map( (user, i) => <User key={i} vn={i} data={user}/>)
                
                : <div>No Users</div>
            }
    </div>
    )
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired
};


export default Users;

