import React from 'react'
import { Heading } from './Heading';
import { UserList } from './UserList';


export const Home = () => {
    return (
        // this is a react fragment 
         <> 
            <Heading />
            <UserList />
        </>
    )
}
