import {
  Grid,
  styled,
  Box,
  Typography,
  AppBar,
  Container,
} from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)({
  fontFamily: "Oswald",
  fontWeight: "semiBold",
  fontSize: "25px",
  color: "inherit",
  textDecoration: "inherit",
  "&:hover": {
    textDecoration: "underline",
  },
  "&:active": {
    color: "#EBB6F2",
  },
});

export default function Header() {
  const Item = styled(Typography)(() => ({
    textAlign: "center",
    color: "white",
  }));

  return (
    <div>
      <Box
        sx={{
          height: "100%",
        }}
      >
        <AppBar
          sx={{
            backgroundColor: "transparent",
          }}
          elevation={0}
          position="absolute"
        >
          <Container sx={{ maxWidth: "85%" }} maxWidth={false}>
            <Grid container>
              <Grid item xs sx={{ alignSelf: "center" }}>
                <Item>
                  <StyledLink to="/home">HOME</StyledLink>
                </Item>
              </Grid>
              <Grid item xs sx={{ alignSelf: "center" }}>
                <Item>
                  <StyledLink to={"/about"}>ABOUT</StyledLink>
                </Item>
              </Grid>
              <Grid item xs sx={{ alignSelf: "center" }}>
                <Item>
                  <StyledLink to={"/portfolio"}>PORTFOLIO</StyledLink>
                </Item>
              </Grid>
              <Grid
                item
                xs
                sx={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Item
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <StyledLink to={"/home"}>
                    <Box
                      component="img"
                      sx={{
                        height: "85%",
                        width: "85%",
                      }}
                      alt="logo"
                      src="img/logo.png"
                    />
                  </StyledLink>
                </Item>
              </Grid>
              <Grid item xs sx={{ alignSelf: "center" }}>
                <Item>
                  <StyledLink to={"/services"}>SERVICES</StyledLink>
                </Item>
              </Grid>
              <Grid item xs sx={{ alignSelf: "center" }}>
                <Item>
                  <StyledLink to={"/myshop"}>MY SHOP</StyledLink>
                </Item>
              </Grid>
              <Grid item xs sx={{ alignSelf: "center" }}>
                <Item>
                  <StyledLink to={"/contact"}>CONTACT</StyledLink>
                </Item>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
}
