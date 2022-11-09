import { Grid, styled, Box, Typography } from "@mui/material";
import * as React from "react";

export default function Header() {
  const Item = styled(Typography)(() => ({
    padding: "50px 0px",
    textAlign: "center",
    color: "white",
  }));

  const TypographyS = styled(Typography)(() => ({
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontFamily: "Raleway",
    fontSize: "20px",
  }));

  return (
    <React.Fragment>
      <div>
        <Grid container>
          <Grid item xs>
            <Item>
              <TypographyS>HOME</TypographyS>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <TypographyS>PORTFOLIO</TypographyS>
            </Item>
          </Grid>
          <Grid item xs>
            <Box
              sx={{
                alignItems: "center",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img style={{ width: "50%" }} src="img/logo.png" />
            </Box>
          </Grid>
          <Grid item xs>
            <Item>
              <TypographyS>REVIEWS</TypographyS>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <TypographyS>CONTACT ME</TypographyS>
            </Item>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
