import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import * as React from "react";
import "./Work.css";

const BootstrapButton = styled(Button)({
  alignContent: "center",
  boxShadow: "none",
  borderRadius: "0px",
  textTransform: "none",
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

export default function DesignServices() {
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
        paddingBottom: "50px",
      }}
    >
      <Box>
        <TypographyS>How can I help you...</TypographyS>
      </Box>
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Container sx={{ height: "100%" }}>
          <Box>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Card item sx={{ display: "flex", alignContent: "center" }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={6} alignSelf="center">
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "start",
                        }}
                      >
                        <CardContent>
                          <Typography
                            component="div"
                            sx={{
                              fontFamily: "Raleway",
                              fontSize: "25px",
                              padding: "20px 0",
                            }}
                          >
                            Social Media
                            <br /> Graphic Design
                          </Typography>
                          <BootstrapButton variant="contained">
                            <Typography
                              sx={{ fontSize: "25px" }}
                              style={{ fontSize: "20px" }}
                            >
                              See More
                            </Typography>
                          </BootstrapButton>
                        </CardContent>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          alignItems: "end",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image="img/work2..png"
                          alt=""
                          style={{ margin: "20px" }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card item sx={{ display: "flex", alignContent: "center" }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={6} alignSelf="center">
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "start",
                        }}
                      >
                        <CardContent>
                          <Typography
                            component="div"
                            sx={{
                              fontFamily: "Raleway",
                              fontSize: "25px",
                              padding: "20px 0",
                            }}
                          >
                            Digital
                            <br />
                            Products
                          </Typography>
                          <BootstrapButton variant="contained">
                            <Typography
                              sx={{ fontSize: "25px" }}
                              style={{ fontSize: "20px" }}
                            >
                              See More
                            </Typography>
                          </BootstrapButton>
                        </CardContent>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          alignItems: "end",
                        }}
                      >
                        <CardMedia
                          component="img"
                          style={{ margin: "20px" }}
                          image="img/work1..png"
                          alt=""
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
            <br />
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Card item sx={{ display: "flex", alignContent: "center" }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={6} alignSelf="center">
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "start",
                        }}
                      >
                        <CardContent>
                          <Typography
                            component="div"
                            sx={{
                              fontFamily: "Raleway",
                              fontSize: "25px",
                              padding: "20px 0",
                            }}
                          >
                            Social Media
                            <br /> Graphic Design
                          </Typography>
                          <BootstrapButton variant="contained">
                            <Typography
                              sx={{ fontSize: "25px" }}
                              style={{ fontSize: "20px" }}
                            >
                              See More
                            </Typography>
                          </BootstrapButton>
                        </CardContent>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          alignItems: "end",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image="img/work2..png"
                          alt=""
                          style={{ margin: "20px" }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card item sx={{ display: "flex", alignContent: "center" }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={6} alignSelf="center">
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "start",
                        }}
                      >
                        <CardContent>
                          <Typography
                            component="div"
                            sx={{
                              fontFamily: "Raleway",
                              fontSize: "25px",
                              padding: "20px 0",
                            }}
                          >
                            Digital
                            <br />
                            Products
                          </Typography>
                          <BootstrapButton variant="contained">
                            <Typography
                              sx={{ fontSize: "25px" }}
                              style={{ fontSize: "20px" }}
                            >
                              See More
                            </Typography>
                          </BootstrapButton>
                        </CardContent>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          alignItems: "end",
                        }}
                      >
                        <CardMedia
                          component="img"
                          style={{ margin: "20px" }}
                          image="img/work1..png"
                          alt=""
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
