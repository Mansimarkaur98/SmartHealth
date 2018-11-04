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
                            placeholder="First Name"
                            margin="normal"
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-bare"
                            placeholder="Middle Name"
                            margin="normal"
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-bare"
                            placeholder="Last name"
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
                    <div>
                        <TextField
                            id="standard-bare"
                            placeholder="Primary phone number"
                            margin="normal"
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-bare"
                            placeholder="Date of Birth"
                            margin="normal"
                            type="date"
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-bare"
                            placeholder="address"
                            margin="normal"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default PatientRegister;