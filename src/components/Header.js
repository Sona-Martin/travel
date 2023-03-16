import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Tourism Website</Typography>
        {/* Add any other header elements here */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
