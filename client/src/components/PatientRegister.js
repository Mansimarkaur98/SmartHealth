import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class PatientRegister extends Component {
    render(){
        return (
            <div>
                <form>
                    <TextField
                        id="standard-bare"
                        placeholder="FirstName"
                        margin="normal"
                    />
                    <TextField
                        id="standard-bare"
                        placeholder="Lastname"
                        margin="normal"
                    />
                    <TextField
                        id="standard-bare"
                        placeholder="email"
                        margin="normal"
                    />
                </form>
            </div>
        )
    }
}

export default PatientRegister;