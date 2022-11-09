import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import * as React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";

export default function SMTemplates() {
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <Box>
        <Container>
          {/* <Grid container columns={12} spacing={2}>
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
          </Grid> */}
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
