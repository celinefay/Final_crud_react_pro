// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type){
        //if case is remover user which is defined in global state that is delete button then access initial state so filter is for the argument callback and user.id is from initial state and action.payload is from globalstate->action->payload(id)
        case 'REMOVE_USER':
            return{
                users: state.users.filter(user => {
                    return user.id !== action.payload
                })
            }
            //step 2: add a case 
            //spread operater 
            case 'ADD_USER':
                return{
                    users: [action.payload, ...state.users]
                }
            
            case 'EDIT_USER':
                const updateUser = action.payload
                const updateUsers = state.users.map(user => {
                    if(user.id === updateUser.id ){
                        return updateUser;
                    }
                    return user;
                })
                return{
                    users: updateUsers
                }

        default:{
            return state
        }
    }
}
