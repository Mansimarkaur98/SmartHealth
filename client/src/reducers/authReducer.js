
const initialState = {
    user_data: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
}

export default function (state = initialState, action){
    switch(action.type){
        case 'REGISTER_ACTIONS':
            return state

        default:
            return state;    
    }
}