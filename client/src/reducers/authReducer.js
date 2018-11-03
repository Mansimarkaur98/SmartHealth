import extend from 'extend';

const initialState = {
    user_profile: null,
    user_type: null,
}

export default function (state = initialState, action){
    switch(action.type){

        case 'USER_AUTH':
            return extend ({}, state, {
                user_profile: action.payload
            });

            // user_type_data holds the bulk data of the type of users available in the app
        case 'USER_TYPE':
            return extend ({}, state, {
                user_type: action.payload
            })

        default:
            return state;    
    }
}