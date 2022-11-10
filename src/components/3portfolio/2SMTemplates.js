import { Box, Container, Grid } from "@mui/material";
import * as React from "react";

export default function SMTemplates2() {
  return (
    <div
      style={{
        backgroundColor: "#EBB6F2",
        height: "100%",
      }}
    >
      <Box>
        <Container>
          <Grid container columns={12} spacing={2}>
            <Grid item xs={4}>
              <Box
                style={{
                  marginTop: "100px",
                }}
              >
                <img src="img/work.1.png" alt="" className="imgWork" />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                style={{
                  marginTop: "100px",
                }}
              >
                <img src="img/work.2.png" alt="" className="imgWork" />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                style={{
                  marginTop: "100px",
                }}
              >
                <img src="img/work.3.png" alt="" className="imgWork" />
              </Box>
            </Grid>
          </Grid>
          <Grid container columns={15} spacing={2}>
            <Grid item xs={3}>
              <Box>
                <img src="img/work1.1.png" alt="" className="imgWork2" />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <img src="img/work1.2.png" alt="" className="imgWork2" />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <img src="img/work1.3.png" alt="" className="imgWork2" />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <img src="img/work1.4.png" alt="" className="imgWork2" />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <img src="img/work.15.png" alt="" className="imgWork2" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
