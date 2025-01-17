import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";


const Header = () => {
  

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar>
          Header Toolbar
        </Toolbar>
      </Container>
      
    </AppBar>
      
  );
};

export default Header;