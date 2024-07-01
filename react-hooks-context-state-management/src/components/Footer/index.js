import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Typography component={"div"} style={{ position: "fixed", bottom: 0 }}>
      <footer
        style={{
          color: "white",
          position: "fixed",
          bottom: 0,
          backgroundColor: "#1976d2",
          width: "100%",
          height: "5%",
        }}
      >
        {/* <center>Copyright ...</center> */}
      </footer>
    </Typography>
  );
};

export default Footer;
