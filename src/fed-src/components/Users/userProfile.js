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
            Profile
            
        </Fragment>
    )
}





export default UserProfile;