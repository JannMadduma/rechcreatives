import { Box, Container, Grid, styled, Typography } from "@mui/material";
import * as React from "react";
import "./Work.css";

export default function Workflow() {
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
        backgroundColor: "#D3B3F2",
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Container sx={{ height: "100%" }}>
          <Grid container>
            <Grid item xs={12}>
              <TypographyS>How can I help you...</TypographyS>
            </Grid>
          </Grid>
          <Grid container columns={12} spacing={2}>
            <Grid item xs={4}>
              <Box>
                <img src="img/work.1.png" alt="" className="imgWork" />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <img src="img/work.2.png" alt="" className="imgWork" />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <img src="img/work.3.png" alt="" className="imgWork" />
              </Box>
            </Grid>
          </Grid>
          <Grid container columns={12} spacing={2}>
            <Grid item xs={2}>
              <Box>
                <img src="img/work1.1.png" alt="" className="imgWork2" />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <img src="img/work1.2.png" alt="" className="imgWork2" />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <img src="img/work1.3.png" alt="" className="imgWork2" />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <img src="img/work1.4.png" alt="" className="imgWork2" />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <img src="img/work.15.png" alt="" className="imgWork2" />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <img src="img/work1.6.png" alt="" className="imgWork2" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
