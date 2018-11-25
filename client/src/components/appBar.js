import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import {auth} from '../firebase/config';
import {connect} from 'react-redux';

const NavigateNonAuth = () => {
    return (
        <div>
            <Link to="/register"><Button className="menu-button" color="inherit">
                <div className="menu-button">Register</div></Button></Link>
            <Link to="/login" ><Button className="menu-button" color="inherit">
                <div className="menu-button">Sign-in</div></Button></Link>
        </div>
    )
}

const NavigateAuth = () => {
    return (
        <Link to="/"><Button className="menu-button" color="inherit" onClick={() => auth.signOut()}>
            <div className="menu-button">Sign out</div></Button></Link>
    )
}

class ButtonAppBar extends Component {

    authentication() {
        const authUser = this.props.authUser;
        return authUser ? <NavigateAuth/> : <NavigateNonAuth/>;
    }

    render(){
    return (
        <div>
            <AppBar position="static">
             <div className="menubar">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="title" color="inherit">
                    {
                        this.props.user_profile ? 
                        <Link to="/home" color="inherit"><div className="SmartHealth">SmartHealth</div></Link> : 
                        <Link to="/" color="inherit"><div className="SmartHealth">SmartHealth</div></Link>
                        }
                    </Typography>
                    {this.authentication()}
                </Toolbar>
                </div>   
            </AppBar>
        </div>
    );
};

};

const mapStateToProps = state => {
    const {user_profile} = state.authReducer;
    return {
        user_profile
    }
}

export default connect(mapStateToProps)(ButtonAppBar);
