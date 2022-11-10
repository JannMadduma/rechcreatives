import { Box, Container, Grid } from "@mui/material";
import * as React from "react";

export default function SMTemplates() {
  return (
    <div>
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Container sx={{ maxWidth: "95%" }} maxWidth={false}>
          <Grid
            container
            columns={12}
            spacing={2}
            sx={{
              height: "100%",
              alignContent: "center",
              paddingTop: "200px",
              paddingLeft: "50px",
            }}
          >
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
          <Grid
            container
            columns={12}
            spacing={2}
            sx={{
              height: "100%",
              alignContent: "center",
              paddingLeft: "50px",
            }}
          >
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
