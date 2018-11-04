import React, {Component} from 'react';
import {connect} from 'react-redux';
import BookAppointment from './BookAppointment';

class PatientPanel extends Component {
    render () {
        return (
            <div>
                {
                    // this.propss.user_type === 'PATIENT'
                    // &&
                    <div>
                        Hope you doing well !
                        <BookAppointment/>
                    </div>
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