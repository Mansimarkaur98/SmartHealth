import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class PatientRegister extends Component {

    constructor(props){
        super(props);

        this.state = {
            first_name: "",
            middle_name: "",
            last_name: "",
            email: "",
            phone: "",
            dob: "",
            address1: "",
            address2: "",
            city: "",
            province: "",
        };
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
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
            <form onSubmit={this.handleSubmit.bind(this)}>
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
                            // value={dob}
                            selected={dob}
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
                            placeholder="city"
                            margin="normal"
                            value={city}
                            onChange={e => this.setState({city: e.target.value})}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-bare"
                            placeholder="province"
                            margin="normal"
                            value={province}
                            onChange={e => this.setState({province: e.target.value})}
                        />
                    </div>
                    <Button variant="outlined" size="medium" color="primary" type="submit">
                        Submit and Proceed
                    </Button>
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