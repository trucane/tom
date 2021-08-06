import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userimage from '../../utils/images/user.png';
import './users.css';




const UserProfile = (props) => {
    const [user, setUser] = useState(null)
    const userId = props.match.params.id;


    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then( data => {setUser(data)})
    }, [])

    return(
        <Fragment>
            {user && (

            <div className='userProfile'>
                <div className="profile-header">
                    <div className="profile-link">
                        <Link to='/'>
                            / users
                        </Link>
                    </div>
                    <div className='profile-username'>{user.username}</div>
                </div>

                <div className="profile-details-container">
                    <div className='profile-image'>
                        <img src={userimage} alt={user.name} />
                    </div>
                    <div className ='profile-details' >
                        <div className='profileusername'>{user.name}</div>
                        <div className='profileusername'>{user.email}</div>
                        <div className='profileaddress'>{user.address.city}</div>
                    </div>
                </div>
            </div>
            )}
        </Fragment>
    )
}


// UserProfile.propTypes = {
//     data: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         username: PropTypes.string.isRequired,
//         userImageURL: PropTypes.string,
//     }),
// };


export default UserProfile;