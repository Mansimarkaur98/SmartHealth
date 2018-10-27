import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {auth, googleAuthProvider} from '../firebase/config';

import {withRouter} from 'react-router';

class GoogleAuthSignIn extends Component {

    render (){
        const {history} = this.props;

        return (
            <div className="button">
                <Button variant= "outlined" onClick={() => {
                    auth.signInWithPopup(googleAuthProvider).then(
                        authUser => {
                            history.push('/home');
                        }
                    )
                }}>
                    Sign in with Google
                </Button>
            </div>
        )
    }
}

export default withRouter(GoogleAuthSignIn);