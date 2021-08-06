import React, { Fragment } from 'react';





const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then( data => console.log(data))
            .then( data => setUsers(data))
    }, []);

    return(<Fragment>
        User
    </Fragment>)
}


export default Users;

