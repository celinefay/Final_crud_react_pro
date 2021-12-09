import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import { 
    ListGroup,
    ListGroupItem,
    Button,
 } from 'reactstrap';

export const UserList = () => {
    //to access the users in here from global state
    const {users, removeUser, editUser} = useContext(GlobalContext);
    return (
        <ListGroup>
            {users.length > 0 ? (
                <>
                 {users.map(user =>(
                <ListGroupItem  key={user.id}>               
                <strong>{user.name}</strong> 
                <div className=" d-flex justify-content-end "> 
                    <Link onClick={() =>  editUser(user)} className="btn btn-warning mr-1" to={`/edit/${user.id}`}>Edit</Link>
                    <Button onClick={() => removeUser(user.id)}  className="mt-auto" color="danger">Delete</Button>
                </div>
            </ListGroupItem>
            ))}      
                </>
            ) : (
                <h4 className="text-center">No Users</h4>
            )}
           
            </ListGroup>
    )
}
