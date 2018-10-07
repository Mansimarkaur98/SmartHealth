import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

// import auth from '../../firebase/config';

class Login_Page extends Component {
    render () {
        return (
            <div>
             <form>
                 <div>
            <TextField
                label="email"
                placeholder = "what's your email ?"
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
                    <Button variant="contained" color="primary">
                        Login
                    </Button>


                    <Button variant="outlined" color="secondary">
                        Forgot password ? 
                    </Button>
            </form>

            <div>
                <h4>Don't have an account ?</h4>
                <Link to='/register' Component>Sign up</Link>
            </div>
            </div>
        )
    }
}

export default Login_Page;