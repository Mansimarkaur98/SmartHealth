import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class PatientRegister extends Component {

    constructor(props){
        super(props);

        this.state = {
            first_name: null,
            middle_name: null,
            last_name: null,
            email: null,
            phone: null,
            dob: null,
            address1: null,
            address2: null,
            city: null,
            province: null,
        };
    }

    displayForm(){

        const {
            first_name,
            middle_name,
            last_name,
            email,
            phone,
            dob,
            address1,
            address2,
            city,
            province
        } = this.state;

        return (
            <form>
                    <div>
                        <TextField
                            id="standard-bare"
                            placeholder="First Name"
                            margin="normal"
                            value={first_name}
                            onChange={e => this.setState({first_name: e.target.value})}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-bare"
                            placeholder="Middle Name"
                            margin="normal"
                            value={middle_name}
                            onChange={e => this.setState({middle_name: e.target.value})}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-bare"
                            placeholder="Last name"
                            margin="normal"
                            value={last_name}
                            onChange={e => this.setState({last_name: e.target.value})}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-bare"
                            placeholder="email"
                            margin="normal"
                            value={email}
                            onChange={e => this.setState({email: e.target.value})}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-bare"
                            placeholder="Primary phone number"
                            margin="normal"
                            value={phone}
                            onChange={e => this.setState({phone: e.target.value})}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-bare"
                            placeholder="Date of Birth"
                            margin="normal"
                            type="date"
                            value={dob}
                            onChange={e => this.setState({date: e.target.value})}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-bare"
                            placeholder="address"
                            margin="normal"
                            value={address1}
                            onChange={e => this.setState({address1: e.target.value})}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-bare"
                            placeholder="continue address"
                            margin="normal"
                            value={address2}
                            onChange={e => this.setState({address2: e.target.value})}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-bare"
                            placeholder="address"
                            margin="normal"
                            value={city}
                            onChange={e => this.setState({city: e.target.value})}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-bare"
                            placeholder="address"
                            margin="normal"
                            value={province}
                            onChange={e => this.setState({province: e.target.value})}
                        />
                    </div>
                </form>
        )
    }

    render(){
        return (
            <div>
                {this.displayForm()}
            </div>
        )
    }
}

export default PatientRegister;