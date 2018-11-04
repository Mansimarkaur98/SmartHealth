import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class PatientRegister extends Component {
    render(){
        return (
            <div>
                <form>
                    <div>
                        <TextField
                            id="standard-bare"
                            placeholder="FirstName"
                            margin="normal"
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-bare"
                            placeholder="Lastname"
                            margin="normal"
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-bare"
                            placeholder="email"
                            margin="normal"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default PatientRegister;