import { Toolbar, Typography } from "@mui/material";
import { StyledButton } from "components/customHeader.style";
import Link from "next/link";
import React from "react";
import theme from "theme";

interface NavMenuItems {
  name: string;
  path: string;
};
const navItems: NavMenuItems[] = [{ name: 'Resume', path: 'resume' }];

const CustomHeader = () => {
  return (
    <Toolbar color='primary' sx={{ margin: '8px', backgroundColor: theme.palette.primary.main, borderRadius: '5px' }} >
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        <Link href={{ pathname: '/' }} >
          <StyledButton >
            Christi Kazakov
          </StyledButton>
        </Link>
      </Typography>
      {navItems.map((item) => (
        <Typography key={item.name}>
          <Link href={{ pathname: `/${item.path}` }} >
            <StyledButton >
              {item.name}
            </StyledButton>
          </Link>
        </Typography>
      ))}
    </Toolbar>
  );
};

export default CustomHeader;