import React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import {Link} from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';

const ButtonAppBar = () => {
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
                    <Link to="/register"><Button className="menu-button" color="inherit">Register</Button></Link>
                    <Link to="/login" ><Button className="menu-button" color="inherit">Sign-in</Button></Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default ButtonAppBar;