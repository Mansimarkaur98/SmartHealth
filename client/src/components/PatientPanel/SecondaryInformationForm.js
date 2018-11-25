import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {database} from '../../firebase/config';

import {Redirect} from 'react-router-dom';

class SecondaryInformationForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            insurance_information: {
                insurance_number: "",
                name: "",
                expiry_date: "",
            },

            emergency_contact: {
                name: "",
                relationship: "",
                address: "",
                mobile: ""
            },
            renderRedirect:false,
        };
    }

    onSubmit(e){
        e.preventDefault();
        const{user_profile} = this.props;
        const uid = user_profile.uid;

        const value = this.state;
        database.ref().child(`/USERS/PATIENTS/detail_patients_list/${uid}`).update(value);
        this.setState({renderRedirect: true});
    }

    render(){

        const {insurance_information, emergency_contact} = this.state;

        return (
            <div className="login-body">
            <div className="patient-register-form">
                {this.state.renderRedirect && <Redirect to="/health-information"/>}
                <form onSubmit={this.onSubmit.bind(this)}>
                        <center><h2>Insurance Information</h2></center>
                        <div>
                            <TextField
                                label="Insurance Number"
                                placeholder="Insurance Number"
                                
                                margin="normal"
                                fullWidth
                                value={insurance_information.insurance_number}
                                onChange={e => this.setState({insurance_information :{ ...insurance_information, insurance_number: e.target.value}})}
                            />
                        </div>

                        <div>
                            <TextField
                                label="Cardholder's Name"
                                placeholder="Cardholder's Name"
                                margin="normal"
                                fullWidth
                                value={insurance_information.name}
                                onChange={e => this.setState({insurance_information :{ ...insurance_information, name: e.target.value}})}
                            />
                            <TextField
                                id="standard-bare"
                                label="Card's expiry date"
                                placeholder="Card's Expiry Date"
                                type="date"
                                margin="normal"
                                fullWidth
                                InputLabelProps={{shrink:true,}}
                                value={insurance_information.expiry_date}
                                onChange={e => this.setState({insurance_information :{ ...insurance_information, expiry_date: e.target.value}})}
                            />
                        </div>

                        <center><h2>Emergency Contact Information</h2></center>

                        <div>
                            <TextField
                                label="Emergency Contact Name"
                                placeholder="Emergency Contact Name"
                                margin="normal"
                                fullWidth
                                value={emergency_contact.name}
                                onChange={e => this.setState({emergency_contact :{ ...emergency_contact, name: e.target.value}})}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Relationship"
                                placeholder="Relationship"
                                margin="normal"
                                fullWidth
                                value={emergency_contact.relationship}
                                onChange={e => this.setState({emergency_contact :{ ...emergency_contact, relationship: e.target.value}})}
                            />
                        </div>

                        
                        <div>
                            <TextField
                                label="Cell Number"
                                placeholder="Cell Number"
                                margin="normal"
                                fullWidth
                                value={emergency_contact.mobile}
                                onChange={e => this.setState({emergency_contact :{ ...emergency_contact, mobile: e.target.value}})}
                            />
                        </div>
                        <p></p>
                        <center><Button variant="outlined" className="patient-register-form-button" size="medium" color="primary" type="submit">
                            Submit and Proceed
                        </Button></center>
                    </form>
            </div>
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

export default connect(mapStateToProps)(SecondaryInformationForm);