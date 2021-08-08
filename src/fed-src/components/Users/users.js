import React from 'react';
import User from './userBadge';
import { useAppContext } from '../../utils/Context/AppContext';
import PropTypes from 'prop-types';
import './users.css';




const Users = () => {

    const state = useAppContext()
    return(
        <div className="users">
            { state.users && state.users[0]
                ? state.users.slice((state.page - 1) * 10, state.page * 10).map( (user, i) => <User key={i} data={user}/>)
                : <div>No Users</div>
            }
    </div>
    )
}

// Users.propTypes = {
//     users: PropTypes.shape({
//         users: PropTypes.array.isRequired,
//         page: PropTypes.number.isRequired
//     }).isRequired,
// };


export default Users;

