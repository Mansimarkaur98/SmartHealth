import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
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
                        Smart Health
                    </Typography>
                    <Button className="menu-button" color="inherit">Register / Sign-in</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default ButtonAppBar;