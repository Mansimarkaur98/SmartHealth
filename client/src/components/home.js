import React, {Component} from 'react';
import {connect} from 'react-redux';
// import firebase from 'firebase';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {database} from '../firebase/config';
// from material ui 
import Avatar from '@material-ui/core/Avatar';
import {Button} from '@material-ui/core'

class Home extends Component {

    componentDidMount(){
        // providing a ref as where to check for the changes...
        database.ref('/').on('value', ()=> console.log('database triggered !!'));
    }

    render() {    
        const user_profile = this.props.user_profile;

        console.log(user_profile);

        // const test = user_profile ? <h2>{user_profile.displayName}</h2> : <Redirect to= "/login"/>
        
        return (
            <div>
                {!user_profile && <Redirect to="/login"/>}
                
                {
                    user_profile && 
                    <div>
                        <div className="avatar-header">
                            <Avatar
                                alt={user_profile.displayName}
                                src={user_profile.photoURL}
                            />
                        </div>
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