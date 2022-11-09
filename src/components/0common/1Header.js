import { Grid, styled, Box, Typography, AppBar } from "@mui/material";
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
    <div>
      <AppBar
        sx={{
          backgroundColor: "transparent",
        }}
        elevation={0}
        position="absolute"
      >
        <Grid container>
          <Grid item xs>
            <Item>
              <TypographyS>HOME</TypographyS>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <TypographyS>ABOUT</TypographyS>
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
              <TypographyS>SERVICES</TypographyS>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <TypographyS>MY SHOP</TypographyS>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <TypographyS>CONTACT</TypographyS>
            </Item>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}
