import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {auth, googleAuthProvider} from '../firebase/config';

class GoogleAuthSignIn extends Component {
    render (){
        return (
            <div className="button">
                <Button variant= "outlined" onClick={() => auth.signInWithPopup(googleAuthProvider)}>
                    Sign in with Google
                </Button>
            </div>
        )
    }
}

export default GoogleAuthSignIn;