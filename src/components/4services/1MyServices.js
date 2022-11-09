import { Box, Container } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid, styled } from "@mui/material";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "white",
  borderColor: "white",
  color: "black",
  "&:hover": {
    backgroundColor: "white",
    borderColor: "white",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "white",
    borderColor: "white",
  },
  "&:focus": {
    boxShadow: "white",
  },
});

export default function Services1() {
  return (
    <div
      style={{
        backgroundImage: "url('img/ABOUT US - GOAL.png')",
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      <Box
        sx={{
          height: "100%",
        }}
        id="aboutUs"
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Grid
            container
            spacing={2}
            sx={{ height: "100%", alignContent: "center" }}
          >
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  alignItems: "center",
                  width: "100%",
                }}
              ></Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                    fontFamily: "Poppins, sans-serif;",
                  }}
                >
                  My Services & Packages
                </Typography>
                <br />
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "black",
                    fontFamily: "Poppins",
                    fontSize: "20px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <br />
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </Typography>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BootstrapButton variant="contained" disableRipple>
                    I NEED THIS
                  </BootstrapButton>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
