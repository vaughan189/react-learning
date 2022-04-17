import React from "react";
import { styled } from "@mui/material/styles";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// import { Grid, Typography } from "@mui/material";

const ListContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const List = () => {
  return (
    // <Grid container spacing={2}>
    //   <Grid item xs={12} md={6}>
    //     <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
    //       Text only
    //     </Typography>
        <ListContainer>
          <List dense={true}>
            <ListItem>
              <ListItemText
                primary="Single-line item"
                secondary={"Secondary text"}
              />
            </ListItem>
          </List>
        </ListContainer>
    //   </Grid>
    // </Grid>
  );
};

export default List;
