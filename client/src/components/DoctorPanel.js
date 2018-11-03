import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core'

class DoctorPanel extends Component {
    render (){
        return (
            <div>
                Welcome back
                <div>
                <Link to="/register-patient" >
                            <Button 
                            className="menu-button" 
                            color="inherit"
                            >
                            Register a new Patient
                            </Button>
                            </Link>
                </div>
            </div>
        )
    }
}

export default DoctorPanel;