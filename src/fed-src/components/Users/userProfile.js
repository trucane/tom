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

    console.log(user)

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
                        <div className='profile-name'>{user.name}</div>
                        <div className='profileu-email'>{user.email}</div>


                        <div className='profile-address'>
                            <div className='profile-street'>{user.address.street}</div>
                            <div className='profile-city'>{user.address.city}</div>
                            <div className='profile-postalcode'>{user.address.zipcode}</div>
                        </div>
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