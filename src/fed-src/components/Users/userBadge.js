import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userimage from '../../utils/images/user.png';
import './users.css';





const UserBadge = ({data, vn}) => {
    const {username, name, id, userImageURL} = data;
    return(
        <Fragment>
            <div className='user'>
                <Link to={`/profile/${id}`}>
                    <div className='user-image'>
                        <img src={userimage} alt={name} />
                    </div>
                </Link>
                <div className='username'>{username + `${vn}`}</div>
                <div className='username'>{name}</div>
            </div>
        </Fragment>
    )
}


UserBadge.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        userImageURL: PropTypes.string,
    }),
};


export default UserBadge;