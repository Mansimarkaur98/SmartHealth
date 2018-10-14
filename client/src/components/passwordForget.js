import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import {link} from 'react-router-dom';

import {auth} from '../firebase';
import {connect} from 'react-redux';

const INITIAL_STATE = {
    email: '',
    error: null,  
};

class PasswordForget extends Component {

    constructor(props){
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        event.preventDefault();
        const email = this.state.email;

        auth.doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({'error': error});
        });
    }

    render (){
        const {
            email,
            error,
        } = this.state;

        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div>
                    <TextField
                        label="email"
                        placeholder = "Enter the email to reset password"
                        multiline
                        value={this.state.email}
                        onChange = {event => this.setState({'email': event.target.value})}
                    />

                    <Button type="submit" variant="contained" color="secondary">
                        Reset Password
                    </Button>
                </div>
                    {error && <p>{error.message}</p>}
            </form>
        )
    }
}

export default connect()(PasswordForget);