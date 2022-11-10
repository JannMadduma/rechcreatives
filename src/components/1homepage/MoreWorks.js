import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box, Container, Grid, Typography } from "@mui/material";

const BootstrapButton = styled(Button)({
  alignContent: "center",
  boxShadow: "none",
  borderRadius: "0px",
  textTransform: "none",
  height: "100%",

  border: "0px solid",
  backgroundColor: "white",
  fontFamily: "Raleway",
  "&:hover": {
    backgroundColor: "white",
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

export default function MoreWorks() {
  const TypographyS = styled(Typography)(() => ({
    padding: "10px",
    textAlign: "center",
    color: "white",
    fontFamily: "Raleway",
    fontWeight: "900",
    fontSize: "50px",
  }));
  return (
    <div
      style={{
        backgroundImage: `url("/img/bg2.png")`,
        backgroundSize: "cover",
        height: "100%",
        padding: "50px 0px",
      }}
    >
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Container sx={{ maxWidth: "95%" }} maxWidth={false}>
          <Grid
            container
            spacing={2}
            sx={{
              height: "100%",
              alignContent: "center",
              paddingTop: "200px",
              paddingLeft: "50px",
            }}
          >
            <Grid item xs={12}>
              <TypographyS>Let's bring your business to life!</TypographyS>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "black",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                }}
                paragraph
              >
                If you are looking for someone to help you with your graphic
                designs and you feel like I have the services that you are
                looking for kindly click the "start now" button below.
                <br />
                <br />
                This may only take a few minutes to answer some questions
                regarding you business background and the services you want.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <BootstrapButton variant="contained">
                <Typography sx={{ fontSize: "25px", color: "#3F9BA6" }}>
                  More of my work here
                </Typography>
              </BootstrapButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
