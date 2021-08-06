import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import userimage from '../../utils/images/user.png';
import './users.css';





const User = ({data}) => {
    const {username, name, userImageURL} = data;
    return(
        <Fragment>
            <div className='user'>
                <div className='user-image'>
                    <img src={userimage} alt={name} />
                </div>
                <div className='username'>{username}</div>
                <div className='username'>{name}</div>
            </div>
        </Fragment>
    )
}


User.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        userImageURL: PropTypes.string,
    }),
};


export default User;