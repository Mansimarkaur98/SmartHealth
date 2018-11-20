import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom';
import {database} from '../firebase/config';
import {connect} from 'react-redux';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class PatientRegister extends Component {

    constructor(props){
        super(props);

        this.state = {
            title:"",
            first_name: "",
            middle_name: "",
            last_name: "",
            gender: "",
            marital_status: "",
            email: "",
            phone: "",
            dob: undefined,
            address1: "",
            address2: "",
            city: "",
            province: "",
            renderRedirect: false,
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

        const personal_information = {
            [uid]: {
                personal_information: {
                    title: this.state.title,
                    first_name: this.state.first_name,
                    middle_name: this.state.middle_name,
                    last_name: this.state.last_name,
                    gender: this.state.gender,
                    marital_status: this.state.marital_status,
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

        const full_name = this.state.first_name + " " + this.state.last_name;

        const patients_list_data = {
            [uid]:{
                name: full_name,
                gender: this.state.gender
            }
        }

        // creating the users_type
        database.ref().child('/USERS/users_type/').update(data_for_user_types);
        // adding information to the patients
        database.ref().child('/USERS/PATIENTS/detail_patients_list').update(personal_information);
        database.ref().child('/USERS/PATIENTS/patients_list').update(patients_list_data);
        this.setState({renderRedirect: true});
    }

    displayForm(){

        const {
            title,
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
                    <p></p>
                    <FormControl className="formControl">
                            
                            <Select
                                value={this.state.title}
                                onChange={e => this.setState({title: e.target.value})}
                                fullWidth
                                displayEmpty
                                name="title"
                                placeholder="title"
                                
                            >
                                <MenuItem value="" disabled>
                                    Title
                                </MenuItem>
                                <MenuItem value="Mr.">Mr.</MenuItem>
                                <MenuItem value="Ms.">Ms.</MenuItem>
                                <MenuItem value="Mrs.">Mrs.</MenuItem>
                            </Select>
                        </FormControl>

                        <div>
                            <TextField
                                label="First Name"
                                placeholder="First Name"
                                margin="normal"
                                fullWidth
                                value={first_name}
                                onChange={e => this.setState({first_name: e.target.value})}
                            />
                        </div>

                    
                        <div>
                            <TextField
                                label="Middle Name"
                                placeholder="Middle Name"
                                margin="normal"
                                fullWidth
                                value={middle_name}
                                onChange={e => this.setState({middle_name: e.target.value})}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Last Name"
                                placeholder="Last Name"
                                margin="normal"
                                fullWidth
                                value={last_name}
                                onChange={e => this.setState({last_name: e.target.value})}
                            />
                        </div>
                    <p></p>
                        <FormControl className="formControl">
                            
                            <Select
                                value={this.state.gender}
                                onChange={e => this.setState({gender: e.target.value})}
                                fullWidth
                                displayEmpty
                                name="gender"
                                placeholder="gender"
                                margin="normal"
                                
                            >
                                <MenuItem value="" disabled>
                                    Gender
                                </MenuItem>
                                <MenuItem value="Mr.">Male</MenuItem>
                                <MenuItem value="Ms.">Female</MenuItem>
                                <MenuItem value="Mrs.">Prefer not to answer</MenuItem>
                            </Select>
                        </FormControl>

                        <p></p>
                        <FormControl className="formControl">
                            
                            <Select
                                value={this.state.marital_status}
                                onChange={e => this.setState({marital_status: e.target.value})}
                                fullWidth
                                displayEmpty
                                name="Marital Status"
                                placeholder="Marital Status"
                                
                            >
                                <MenuItem value="" disabled>
                                    Marital Status
                                </MenuItem>
                                <MenuItem value="Married">Married</MenuItem>
                                <MenuItem value="Single">Single</MenuItem>
                                <MenuItem value="Divorced">Divorced</MenuItem>
                                <MenuItem value="Widowed">Widowed</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>
                        

                        <div>
                            <TextField
                                label="Email Address"
                                placeholder="Email"
                                margin="normal"
                                fullWidth
                                value={email}
                                onChange={e => this.setState({email: e.target.value})}
                            />
                        </div>
                        <div>
                            <TextField
                                Label="Primary phone number"
                                placeholder="Primary phone number"
                                margin="normal"
                                fullWidth
                                value={phone}
                                onChange={e => this.setState({phone: e.target.value})}
                            />
                        </div>
                        <div>
                            <TextField
                                
                                label="Date of Birth"
                                //placeholder="Date of Birth"
                                margin="normal"
                                type="date"
                                fullWidth
                                //value={dob}
                                InputLabelProps={{shrink:true,}}
                                selected={dob}
                                onChange={e => this.setState({dob: e.target.value})}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Address"
                                placeholder="Address"
                                margin="normal"
                                fullWidth
                                value={address1}
                                onChange={e => this.setState({address1: e.target.value})}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Continue Address"
                                placeholder="Continue Address"
                                margin="normal"
                                fullWidth
                                value={address2}
                                onChange={e => this.setState({address2: e.target.value})}
                            />
                        </div>
                        <div>
                            <TextField
                                label="City"
                                placeholder="City"
                                margin="normal"
                                fullWidth
                                value={city}
                                onChange={e => this.setState({city: e.target.value})}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Province"
                                placeholder="Province"
                                margin="normal"
                                fullWidth
                                value={province}
                                onChange={e => this.setState({province: e.target.value})}
                            />
                            <p></p>
                        </div>
                        <center><Button variant="outlined" className="patient-register-form-button" disabled={Object.values(this.state).includes("")} size="medium" color="primary" type="submit">
                            Submit and Proceed
                        </Button></center>
                        <p></p>
                    </form>
                </div>
            </div>
        )
    }

    componentWillUnmount(){}

    render(){

        return (
            <div>
                {this.state.renderRedirect && <Redirect to="/insurance-information"/>}
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