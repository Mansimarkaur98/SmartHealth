import React, {Component} from 'react';
import {auth} from '../firebase';
// import MenuItem from '@material-ui/core/MenuItem';
import {withRouter} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GoogleAuthSignIn from './googleAuthSignIn'
// import {withStyles} from '@material-ui/core/styles';

import logo from '../assets/logo.png'

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    password1: '',
    password2: '',
    error: null
}

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...INITIAL_STATE
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        const {history} = this.props;

        console.log(history);

        e.preventDefault();
        const {
            email, password1
        } = this.state;

        auth.doCreateUserWithEmailAndPassword(email, password1)
        .then(authUser => {
          this.setState({ ...INITIAL_STATE });
          history.push('/home');
        })
        .catch(error => {
          this.setState({error: error});
        });
  
    }    

    render () {

        const {
            firstName,
            lastName,
            email,
            password1,
            password2,
            error
        } = this.state;

        const isInvalid = password1 !== password2 ||
        password1 === '' || email === '' ||
        firstName === '' || lastName === '' 

        return (
            <div className="patient-register-form">
                <form onSubmit={this.handleSubmit.bind(this)}>
                <center><img src={logo} alt="logo"/></center>
                    <div>
                    <TextField
                        label="First Name"
                        value={firstName}
                        placeholder = "First Name"
                        fullWidth
                        margin="normal"
                        onChange={e => {this.setState({'firstName' : e.target.value})}}
                    />
                    </div>

                    <div>
                    <TextField
                        label="Last Name"
                        margin="normal"
                        value={lastName}
                        placeholder = "Last Name"
                        fullWidth
                        onChange={e => {this.setState({'lastName' : e.target.value})}}
                    />
                    </div>

                    <div>
                    <TextField
                        label="Email Address"
                        margin="normal"
                        value={email}
                        placeholder = "Enter your email address here"
                        fullWidth
                        onChange={e => {this.setState({'email' : e.target.value})}}
                    />
                    </div>

                    <div>
                    <TextField
                        label="Password"
                        margin="normal"
                        type="password"
                        value={password1}
                        onChange={e => {this.setState({'password1' : e.target.value})}}
                        placeholder = "Password here"
                        fullWidth
                    />
                    </div>

                    <div>
                    <TextField
                        label="Confirm password "
                        margin="normal"
                        type="password"
                        value={password2}
                        placeholder = "Re-enter your password here "
                        fullWidth
                        onChange={e => {this.setState({'password2' : e.target.value})}}
                    />
                    </div>
                    <p>
                    </p>
                    {error && <p>{error}</p>}
                    <center><Button variant="contained" color="primary" disabled={isInvalid} type="submit">
                        Register
                    </Button></center>
                </form> 

                <p></p>

                <center> OR
                <p></p>
                    <GoogleAuthSignIn/> </center>
            </div>
        )
    }
}

export default withRouter(Register);