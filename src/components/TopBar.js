import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const TopBar = () => (
  <AppBar position="static" className="topBar">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Cake App
      </Typography>
    </Toolbar>
  </AppBar>
);

export default TopBar;