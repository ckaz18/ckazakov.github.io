import { AppBar, Container, IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";


const Header = () => {

  return (
    // <AppBar position='static' color="primary" sx={{ padding: '8px'}}>
    <Toolbar color='primary' sx={{ margin: '8px', }}>
      <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
      <Link href={{
        pathname: '/',
      }}>
        
          Christi Kazakov
      </Link>
        </Typography>
      <Link
        href={{
          pathname: '/resume',
        }}
      >Resume
      </Link>
    </Toolbar>

    // </AppBar>

  );
};

export default Header;