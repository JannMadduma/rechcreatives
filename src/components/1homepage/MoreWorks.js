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
  backgroundColor: "#3F9BA6",
  fontFamily: "Raleway",
  "&:hover": {
    backgroundColor: "#3F9BA6",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#3F9BA6",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem #3F9BA6",
  },
});

export default function MoreWorks() {
  return (
    <div
      style={{
        backgroundColor: "white",
        backgroundSize: "cover",
        height: "100px",
        display: "flex",
        alignItems: "center",
        margin: "50px",
      }}
    >
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <BootstrapButton variant="contained">
          <Typography sx={{ fontSize: "25px" }}>
            More of my work here
          </Typography>
        </BootstrapButton>
      </Container>
    </div>
  );
}
