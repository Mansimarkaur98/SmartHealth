
export function userAuth(values){
    return {
        type: 'USER_AUTH',
        payload: values
    }
}

export function userTypeAction(user_data, uid){

    const user_type = user_data[uid].type;
    
    return {
        type: "USER_TYPE",
        payload: user_type
    }
}