import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

class ButtonAppBar extends Component {

    render(history){
    return (
        <div>
            <AppBar position="static">
                
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="title" color="inherit">
                    <Link to="/">Smart Health</Link>
                    <Link to="/register"><Button className="menu-button" color="inherit" history = {history} >Register</Button></Link>
                    <Link to="/login" ><Button className="menu-button" color="inherit" history={history}>Sign-in</Button></Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

};

export default ButtonAppBar;