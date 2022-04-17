import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  "@media all": {
    minHeight: 75,
  },
}));

const Header = (props) => {
  const { title } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              {title}
            </Typography>
          </Toolbar>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
