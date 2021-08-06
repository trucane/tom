import React, { Fragment } from 'react';





const User = (props) => {
    const {username, name} = props.data;
    return(
        <Fragment>
            <div className='user'>
                <div className='username'>{username}</div>
                <div className='user-image'>image</div>
                <div className='user-details'>{name}</div>
            </div>
        </Fragment>
    )
}


export default User;