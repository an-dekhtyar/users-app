import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getUsers} from './bll/user-reducer';

import {Search} from './components/Search/Search'
import {UsersTable} from "./components/Users/UserTable";


function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
            <div>
                <Search/>
                <UsersTable/>
            </div>
    );
}

export default App;