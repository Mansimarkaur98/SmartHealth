import React, {Component} from 'react';
import {auth, googleAuthProvider} from '../firebase/config';

class GoogleAuthSignIn extends Component {
    render (){
        return (
            <div className="button">
                <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
                    Sign in with Google
                </button>
            </div>
        )
    }
}

export default GoogleAuthSignIn;