import React, {Component} from 'react';
import firebase from 'firebase';
import {Redirect} from 'react-router-dom';

class Home extends Component {

    render() {    
        const user = firebase.auth().currentUser;
        const test = user ? <h2>{user.displayName}</h2> : <Redirect to= "/login"/>
        
        return (
            <div>
                <h4>Hi User</h4>
                {test}
            </div>
        )
    }
}

export default Home;