import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import {auth} from '../firebase';

const navigateNonAuth = () => {
    return (
        <div>
            <Link to="/register"><Button className="menu-button" color="inherit">Register</Button></Link>
            <Link to="/login" ><Button className="menu-button" color="inherit">Sign-in</Button></Link>
        </div>
    )
}

const navigateAuth = () => {
    return (
        <Link to="/"><Button className="menu-button" color="inherit" onClick={auth.doSignOut}>Sign out</Button></Link>
    )
}

class ButtonAppBar extends Component {

    authentication() {
        console.log('test');
        const {authUser} = this.props;
        return authUser ? navigateAuth() : navigateNonAuth();
    }

    render(){
    return (
        <div>
            <AppBar position="static">
                
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="title" color="inherit">
                    <Link to="/">Smart Health</Link>
                    </Typography>
                    {this.authentication}
                </Toolbar>
            </AppBar>
        </div>
    );
};

};

export default ButtonAppBar;