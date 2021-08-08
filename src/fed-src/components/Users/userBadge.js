import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './users.css';





const UserBadge = ({data}) => {
    const {name, id, picture} = data;
    const {first, last } = name; 
    return(
        <Fragment>
            <div className='user'>
                <Link to={`/profile`}>
                    <div className='user-image'>
                        <img src={picture.large} alt={`${first} ${last}`} />
                    </div>
                </Link>
                <div className="user-name-container">
                    <div className='username'>{id.name}</div>
                    <div className='username'>{`${first} ${last}`}</div>
                </div>
            </div>
        </Fragment>
    )
}


UserBadge.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.shape({
            name:PropTypes.string.isRequired
        }).isRequired,
        name: PropTypes.shape({
            first: PropTypes.string.isRequired,
            last: PropTypes.string.isRequired,
        }).isRequired,
        picture:PropTypes.shape({
            large: PropTypes.string
        })
    }),
};


export default UserBadge;