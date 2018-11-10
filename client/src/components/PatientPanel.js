import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
// BookAppointment

import PatientRegister from './PatientRegister';
import DoctorProfile from './DoctorPanel/DoctorProfile';

class PatientPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            renderRedirect: false,
        }
    }

    componentDidUpdate(){
        const {isRegistered} = this.props;
        
        if(!isRegistered){
            return <Redirect to="/register-patient"/>
        }
    }

    render () {
        const {isRegistered} = this.props;
        const test = !isRegistered ? this.setState({renderRedirect:true}) : '';
        
        return (
            <div>
                {this.state.renderRedirect && <Redirect to="/register-patient"/>}
                {
                    isRegistered &&
                    <DoctorProfile/>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {
        user_profile,
        user_type
    }= state.authReducer;

    return {
        user_profile,
        user_type
    }
}

export default connect()(PatientPanel);