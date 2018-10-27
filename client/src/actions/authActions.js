
export function userAuth(values){

    console.log('from actions', values);

    return {
        type: 'USER_AUTH',
        payload: values
    }
}