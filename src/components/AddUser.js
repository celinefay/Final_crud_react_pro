import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import {  
    Form,
    FormGroup,
    Label,
    Input,
    Button    
} from 'reactstrap'; 
//the input field from reactstrap to be able to use
// we can have useState hook to keep track on the input values 

export const AddUser = () => {
    //to be able to add whatever name use onchange or else it wont work 
    const [name, setName] = useState('');
    const {addUser} = useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = () =>{
        const newUser = {
            id: uuid(),
            name: name
        }
        addUser(newUser);
        history.push('/');
    }
    
    const onChange = (e) => {
         setName(e.target.value);
     }

    //was first step to impliment all in Form : 
    //onSubmit is to handle the submition and onChange hook is to manage the input 
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" onChange={onChange} value={name} placeholder= "Enter Name"> </Input>
            </FormGroup>
            <Button type="Submit">Submit</Button>
            <Link to="/" className="btn btn-danger m-2">Cancel</Link>
        </Form>
    )
}
