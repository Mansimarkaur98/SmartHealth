import React, {Component} from 'react';
import {connect} from 'react-redux';
// import firebase from 'firebase';
import {Redirect} from 'react-router-dom';

class Home extends Component {

    render() {    
        const user_profile = this.props.user_profile;

        const test = user_profile ? <h2>{user_profile.displayName}</h2> : <Redirect to= "/login"/>
        
        return (
            <div>
                {
                    user_profile && 
                    <div>
                        {test}
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