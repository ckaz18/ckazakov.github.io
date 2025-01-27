import {
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { StyledButton } from "components/customHeader.style";
import Link from "next/link";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

interface NavMenuItems {
  name: string;
  path: string;
}
const navItems: NavMenuItems[] = [{ name: "Resume", path: "resume" }];

const CustomHeader = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Toolbar
      color="primary"
      sx={{
        margin: "1px",
        background: 'transparent',
        borderRadius: "3px",
      }}
    >
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link href={{ pathname: "/" }}>
          <StyledButton>Christi Kazakov</StyledButton>
        </Link>
      </Typography>
      {/* {navItems.map((item) => (
        <Typography key={item.name}>
          <Link href={{ pathname: `/${item.path}` }} >
            <StyledButton >
              {item.name}
            </StyledButton>
          </Link>
        </Typography>
      ))} */}

      {navItems.map((item) => (
        <Typography key={item.name}>
          {isSmallScreen ? (
            <>
              <IconButton
                color="primary"
                aria-label={item.name}
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <Typography key={item.name}>
                  <Link href={{ pathname: `/${item.path}` }}>
                    <MenuItem onClick={handleClose}>Resume</MenuItem>
                  </Link>
                </Typography>
              </Menu>
            </>
          ) : (
            <Link href={{ pathname: `/${item.path}` }}>
              <StyledButton>{item.name}</StyledButton>
            </Link>
          )}
        </Typography>
      ))}
    </Toolbar>
  );
};

export default CustomHeader;
