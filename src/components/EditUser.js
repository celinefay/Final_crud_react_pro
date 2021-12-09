import React, {useState, useContext, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import {  
    Form,
    FormGroup,
    Label,
    Input,
    Button    
} from 'reactstrap';

export const EditUser = (props) => {
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    })
    const { editUser, users } = useContext(GlobalContext);
    const history = useHistory();
    const currentUserId = props.match.params.id;
    
    //just so when we click on edit in the bar there the user is already found
    useEffect (() => {
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === userId);
        setSelectedUser(selectedUser)
    }, [currentUserId, users])
    
    
    
    const onSubmit = (e) => {
        e.preventDefault();
        editUser(selectedUser);
        history.push("/")
    }
    
    const onChange = (e) => {
        setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name" value={selectedUser.name} onChange={onChange} placeholder="Enter Name"></Input>
            </FormGroup>
            <Button type="submit">Edit Name</Button>
            <Link to="/" className="btn btn-danger m-2">Cancel</Link>
        </Form>
        </div>
    )
}




// required for tha name = "name"

// export const EditUser = (props) => {
    //     const [selectedUser, setSelectedUser] = useState({
        //         id : '',
        //         name: ''
        //     });
        //     const {users, editUser} = useContext(GlobalContext);
        //     const history = useHistory();
        //     const currentUserId = props.match.params.id;
        
        // const onSubmit = () =>{
        //     editUser(selectedUser)
        //     history.push('/');
        // }