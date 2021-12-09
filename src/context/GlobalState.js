import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//intial state 
const initialState = {
    users:[]
};

//create context 
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    //Actions // when we add the action we add the case 
    // for delete button to work (removeUser)
    const removeUser = (id) =>{
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }
    //step 1 : is to add the action 
    const addUser = (name) =>{
        dispatch({
            type: 'ADD_USER',
            payload: name 
        })
    }

    const editUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user
        })
    }

    // set state when you have new data from the server, or from user input
    // step 3: send function (value)
    return (
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children }
        </GlobalContext.Provider>
    )
}