import React, { Fragment, useState, useEffect } from 'react';
import Users from '../Users/users';
import Pagination from '../../utils/Pagination/pagination';

const Landing = () => {

    return (
        <Fragment>
            <Users />
            <Pagination
                numOfItems={null}
            />
        </Fragment>
    )
}



export default Landing;