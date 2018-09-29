import React, {Component} from 'react';

// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import {withStyles} from '@material-ui/core/styles';

class Register extends Component {

    render () {
        return (
            <div>
                <form>
                    <div>
                    <TextField
                        label="firstname"
                        placeholder = "First Name"
                        multiline
                    />

                    <TextField
                        label="lastname"
                        placeholder = "Last Name"
                        multiline
                    />
                    </div>

                    <div>
                    <TextField
                        label="email"
                        placeholder = "enter your email here here"
                        multiline
                    />
                    </div>

                    <div>
                    <TextField
                        label="password"
                        placeholder = "password here"
                        multiline
                    />
                    </div>

                    <div>
                    <TextField
                        label="confirm password "
                        placeholder = "sssshhhh -2 "
                        multiline
                    />
                    </div>

                    <Button variant="contained" color="primary">
                        Register
                    </Button>
                </form> 
            </div>
        )
    }
}

export default Register;