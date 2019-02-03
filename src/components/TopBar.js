import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const TopBar = () => (
  <AppBar position="sticky" className="topBar">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Cake App
      </Typography>
    </Toolbar>
  </AppBar>
);

export default TopBar;