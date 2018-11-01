import React, {Component} from 'react';
import {connect} from 'react-redux';
// import firebase from 'firebase';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core'

class Home extends Component {

    render() {    
        const user_profile = this.props.user_profile;

        console.log(user_profile);

        const test = user_profile ? <h2>{user_profile.displayName}</h2> : <Redirect to= "/login"/>
        
        return (
            <div>
                {
                    user_profile && 
                    <div>
                        {test}
                        <Link to="/register-patient" >
                            <Button 
                            className="menu-button" 
                            color="inherit"
                            >
                            Register a new Patient
                            </Button>
                            </Link>
                    </div>
                }
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
    };
}

export default connect(mapStateToProps)(Home);