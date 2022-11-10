import { Grid, styled, Box, Typography, AppBar } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";

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
              <Link to={"/home"}>
                <TypographyS>HOME</TypographyS>
              </Link>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <Link to={"/about"}>
                <TypographyS>ABOUT</TypographyS>
              </Link>
            </Item>
          </Grid>
          <Grid item xs>
            <Link to={"/portfolio"}>
              <TypographyS>PORTFOLIO</TypographyS>
            </Link>
          </Grid>
          <Grid item xs>
            <Link to={"/home"}>
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
            </Link>
          </Grid>
          <Grid item xs>
            <Link to={"/services"}>
              <TypographyS>SERVICES</TypographyS>
            </Link>
          </Grid>
          <Grid item xs>
            <Link to={"/myshop"}>
              <TypographyS>MY SHOP</TypographyS>
            </Link>
          </Grid>
          <Grid item xs>
            <Link to={"/contact"}>
              <TypographyS>CONTACT</TypographyS>
            </Link>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}
