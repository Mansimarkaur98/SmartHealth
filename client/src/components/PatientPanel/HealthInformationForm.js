import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom';
import {database} from '../../firebase/config';
import {connect} from 'react-redux';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class SecondaryInformationForm extends Component {
    constructor(props){
        super(props);

        this.state = {
                height: "",
                weight: "",
                blood_group: "",
                allergies: "",
        
            medications: {
                medication_name: "",
                dose: "",
                frequency:""
            },
            renderRedirect: false,
        };
    }

    onSubmit(e){
        e.preventDefault();
        const user_profile  = this.props.user_profile;
        const uid = user_profile.uid;

        const {height, weight, blood_group, allergies, medications} = this.state;

        const value = {
            
            common_health_information: {
                height,
                weight,
                blood_group,
                allergies},
            medications    
        }

        database.ref().child(`/USERS/PATIENTS/detail_patients_list/${uid}`).update(value);
        this.setState({renderRedirect : true});
    }

    render(){

        const {medications, common_health_information} = this.state;

        return (
            <div className="login-body">
                    {this.state.renderRedirect && <Redirect to="/home"/>}
                <div className="patient-register-form">
                    <form onSubmit={this.onSubmit.bind(this)}>
                            <center><h2>Health Information</h2></center>
                            <div>
                                <TextField
                                    id="standard-bare"
                                    placeholder="Height (in cms)"
                                    margin="normal"
                                    fullWidth
                                    value={this.state.height}
                                    onChange={e => this.setState({height: e.target.value})}
                                />
                            </div>

                            <div>
                                <TextField
                                    label="Weight (in kgs)"
                                    id="standard-bare"
                                    placeholder="Weight (in kgs)"
                                    margin="normal"
                                    fullWidth
                                    value={this.state.weight}
                                    onChange={e => this.setState({weight: e.target.value})}
                                />
                            </div>
                            <p></p>

                                <FormControl className="formControl">
                            
                                    <Select
                                        value={this.state.blood_group}
                                        onChange={e => this.setState({blood_group: e.target.value})}
                                        fullWidth
                                        displayEmpty
                                        name="Blood-group"
                                        placeholder="Blood-group"
                                        
                                    >
                                        <MenuItem value="" disabled>
                                            Blood - group
                                        </MenuItem>
                                        <MenuItem value="A+">A+</MenuItem>
                                        <MenuItem value="A-">A-</MenuItem>
                                        <MenuItem value="AB+">AB+</MenuItem>
                                        <MenuItem value="AB-">AB-</MenuItem>
                                        <MenuItem value="B+">B+</MenuItem>
                                        <MenuItem value="B-">B-</MenuItem>
                                        <MenuItem value="O+">O+</MenuItem>
                                        <MenuItem value="O-">O-</MenuItem>
                                    </Select>
                                </FormControl>
                            
                            <div>
                                <TextField
                                label="Allergies"
                                    id="standard-bare"
                                    placeholder="Allergies"
                                    margin="normal"
                                    fullWidth
                                    value={this.state.allergies}
                                    onChange={e => this.setState({allergies: e.target.value})}
                                />
                            </div>
                            
                            <center><h2>Medication</h2></center>
                            <center><h4>List any current medications you are taking</h4></center>
                            
                            <div>
                                <TextField
                                    label="Medication Name"
                                    id="standard-bare"
                                    placeholder="Medication Name"
                                    margin="normal"
                                    fullWidth
                                    value={this.state.medications.medication_name}
                                    onChange={e => this.setState({medications :{ ...medications, medication_name: e.target.value}})}
                                />
                            </div>
                            <div>
                                <TextField
                                    
                                    label="Start Date"
                                    margin="normal"
                                    type="date"
                                    fullWidth
                                    InputLabelProps={{shrink:true,}}
                                    value={this.state.medications.dose}
                                    onChange={e => this.setState({medications :{ ...medications, dose: e.target.value}})}
                                />
                            </div>

                            
                            
                            <div>
                                <TextField
                                    label="Frequency"
                                    id="standard-bare"
                                    placeholder="Frequency"
                                    fullWidth
                                    margin="normal"
                                    value={this.state.medications.frequency}
                                    onChange={e => this.setState({medications :{ ...medications, frequency: e.target.value}})}
                                />
                            </div>
                            <p></p>
                            <center><Button variant="outlined" className="patient-register-form-button" size="medium" color="primary" type="submit">
                                Submit
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