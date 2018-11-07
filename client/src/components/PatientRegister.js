import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {database} from '../firebase/config';
import {connect} from 'react-redux';


class PatientRegister extends Component {

    constructor(props){
        super(props);

        this.state = {
            first_name: "",
            middle_name: " ",
            last_name: "",
            email: "",
            phone: "",
            dob: undefined,
            address1: "",
            address2: " ",
            city: "",
            province: "",
        };
    }

    handleSubmit(e){
        e.preventDefault();
        const { user_profile }= this.props
        const uid = this.props.user_profile.uid;

        const data_for_user_types = {
            [uid]: {
                name: user_profile.displayName || this.state.first_name,
                type: "PATIENT"
            }
        }

        const detail_data = {
            [uid]: {
                personal_information: {
                    first_name: this.state.first_name,
                    middle_name: this.state.middle_name,
                    last_name: this.state.last_name,
                    email: this.state.email,
                    phone: this.state.phone,
                    dob: this.state.dob,
                    address1: this.state.address1,
                    address2: this.state.address2,
                    city: this.state.city,
                    province: this.state.province,
                }
            }
        }

        // creating the users_type
        database.ref().child('/USERS/users_type/').update(data_for_user_types);
        // adding information to the patients
        database.ref().child('/USERS/PATIENTS/detail_patients_list').update(detail_data);
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
            <div>
                <div>
                    <h3>Welcome to the app</h3>
                    <h5>Before proceeding further, please fill out the below form</h5>
                </div>
            <div className="patient-register-form">
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
                                onChange={e => this.setState({dob: e.target.value})}
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
                        <Button variant="outlined" className="patient-register-form-button" disabled={Object.values(this.state).includes("")} size="medium" color="primary" type="submit">
                            Submit and Proceed
                        </Button>
                    </form>
                </div>
            </div>
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

const mapStateToProps = state => {
    const {
        user_profile
    } = state.authReducer;

    return {
        user_profile
    }
}

export default connect(mapStateToProps)(PatientRegister);