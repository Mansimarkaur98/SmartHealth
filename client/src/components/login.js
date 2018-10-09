import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

import {auth} from '../firebase';

// import auth from '../../firebase/config';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
}

class Login_Page extends Component {
    constructor(props){
        super(props);

        this.state = {...INITIAL_STATE}
    }
    
    onSubmit = (event) => {
        const {
          email,
          password,
        } = this.state;
    
        const {
          history,
        } = this.props;
    
        auth.doSignInWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            history.push('/home');
          })
          .catch(error => {
            this.setState({error: error});
          });
    
        event.preventDefault();
    }

    render () {

        const {
            email,
            password,
            error
        } = this.state;

        return (
            <div>
                <form>
                    <div>
                        <TextField
                            label="email"
                            placeholder = "what's your email ?"
                            multiline
                            value={email}
                            onChange = {event => this.setState({'email': event.target.value})}
                        />
                    </div>
                    
                    <div>
                        <TextField
                            label="password"
                            placeholder = "password here"
                            multiline
                            value={password}
                            onChange = {event => this.setState({'password': event.target.value})}
                        />
                    </div>
                        <Button variant="contained" color="primary">
                            Login
                        </Button>


                        <Button variant="outlined" color="secondary">
                            Forgot password ? 
                        </Button>

                        {error && <p>{error.message}</p>}
                </form>

                <div>
                    <h4>Don't have an account ?</h4>
                    <Link to='/register'>Sign up</Link>
                </div>
            </div>
        )
    }
}

export default Login_Page;