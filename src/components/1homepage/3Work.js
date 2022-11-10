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
import "./Work.css";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#3F9BA6",
  borderColor: "#3F9BA6",
  "&:hover": {
    backgroundColor: "#3F9BA6",
    borderColor: "#3F9BA6",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#3F9BA6",
    borderColor: "#3F9BA6",
  },
  "&:focus": {
    boxShadow: "#3F9BA6",
  },
});

const images = [
  {
    imgPath: "img/clientRev.png",
  },
  {
    imgPath: "img/clientRev.png",
  },
  {
    imgPath: "img/clientRev.png",
  },
  {
    imgPath: "img/clientRev.png",
  },
];

export default function Work() {
  const TypographyS = styled(Typography)(() => ({
    padding: "10px",
    textAlign: "center",
    color: "white",
    fontFamily: "Raleway",
    fontWeight: "900",
    fontSize: "50px",
  }));

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

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
        <Container sx={{ height: "100%" }}>
          <Grid container>
            <Grid item xs={12}>
              <TypographyS>Some Of My Work</TypographyS>
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
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <BootstrapButton variant="contained">
                <Typography
                  sx={{ fontSize: "25px" }}
                  style={{ fontSize: "20px" }}
                >
                  SHOW MORE
                </Typography>
              </BootstrapButton>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <TypographyS>How can I help you...</TypographyS>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Card sx={{ display: "flex", alignContent: "center" }}>
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
              <Card sx={{ display: "flex", alignContent: "center" }}>
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
              <Card sx={{ display: "flex", alignContent: "center" }}>
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
              <Card sx={{ display: "flex", alignContent: "center" }}>
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
          <Typography
            component="div"
            sx={{
              padding: "10px",
              textAlign: "center",
              color: "white",
              fontFamily: "Raleway",
              fontWeight: "900",
              fontSize: "50px",
            }}
          >
            Client's Feedback
          </Typography>
          <Box sx={{ maxWidth: "100%", flexGrow: 1, position: "relative" }}>
            <div
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
              style={{ maxWidth: "100%" }}
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: "100%",
                        display: "block",
                        maxWidth: "100%",
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </div>
            <MobileStepper
              sx={{
                backgroundColor: "transparent",
                marginTop: "-230px",
                width: "100%",
                position: "absolute",
                padding: 0,
              }}
              variant={false}
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <IconButton
                  aria-label="delete"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                  sx={{
                    background: "#54B5BF",
                  }}
                >
                  {theme.direction === "rtl" ? (
                    <ArrowBackIosNewIcon />
                  ) : (
                    <ArrowForwardIosIcon />
                  )}
                </IconButton>
              }
              backButton={
                <IconButton
                  aria-label="delete"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  sx={{
                    background: "#54B5BF",
                  }}
                >
                  {theme.direction === "rtl" ? (
                    <ArrowForwardIosIcon />
                  ) : (
                    <ArrowBackIosNewIcon />
                  )}
                </IconButton>
              }
            />
          </Box>
          <Grid container>
            <Grid item xs={12}>
              <TypographyS>Project Work Flow</TypographyS>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <Card
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
                style={{ borderRadius: "10px" }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <TypographyS
                    sx={{
                      color: "#3F9BA6",
                      fontSize: "25px",
                    }}
                  >
                    COMPLETE
                  </TypographyS>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <BootstrapButton variant="contained" disableRipple>
                      Step
                    </BootstrapButton>
                  </div>
                  <Typography
                    component="div"
                    sx={{
                      fontFamily: "Raleway",
                      fontSize: "12px",
                      fontWeight: "bold",
                      padding: "20px 0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Completion & Submission
                  </Typography>
                  <Typography
                    component="div"
                    sx={{
                      fontFamily: "Raleway",
                      fontSize: "12px",
                      padding: "20px 0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Once you are satisfied with the design, I now enter the last
                    stage of the project. I polish off the final product/design
                    to ready it for turnover and ask you to send the remainder
                    of the payment.
                  </Typography>
                  <Divider />
                  <Typography
                    component="div"
                    sx={{
                      fontFamily: "Raleway",
                      fontSize: "12px",
                      padding: "20px 0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Milestones Involved
                  </Typography>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <ul>
                      <li>Polishing of design output(s)</li>
                      <li>50% Remainder Payment</li>
                      <li>Transfer and turn-over of files</li>
                      <li>Feedback and Review</li>
                    </ul>
                  </div>

                  <Typography
                    component="div"
                    sx={{
                      fontFamily: "Raleway",
                      fontSize: "12px",
                      padding: "20px 0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Client & Designer Work
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
                style={{ borderRadius: "10px" }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <TypographyS
                    sx={{
                      color: "#3F9BA6",
                      fontSize: "25px",
                    }}
                  >
                    COMPLETE
                  </TypographyS>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <BootstrapButton variant="contained" disableRipple>
                      Step
                    </BootstrapButton>
                  </div>
                  <Typography
                    component="div"
                    sx={{
                      fontFamily: "Raleway",
                      fontSize: "12px",
                      fontWeight: "bold",
                      padding: "20px 0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Completion & Submission
                  </Typography>
                  <Typography
                    component="div"
                    sx={{
                      fontFamily: "Raleway",
                      fontSize: "12px",
                      padding: "20px 0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Once you are satisfied with the design, I now enter the last
                    stage of the project. I polish off the final product/design
                    to ready it for turnover and ask you to send the remainder
                    of the payment.
                  </Typography>
                  <Divider />
                  <Typography
                    component="div"
                    sx={{
                      fontFamily: "Raleway",
                      fontSize: "12px",
                      padding: "20px 0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Milestones Involved
                  </Typography>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <ul>
                      <li>Polishing of design output(s)</li>
                      <li>50% Remainder Payment</li>
                      <li>Transfer and turn-over of files</li>
                      <li>Feedback and Review</li>
                    </ul>
                  </div>

                  <Typography
                    component="div"
                    sx={{
                      fontFamily: "Raleway",
                      fontSize: "12px",
                      padding: "20px 0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Client & Designer Work
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
                style={{ borderRadius: "10px" }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <TypographyS
                    sx={{
                      color: "#3F9BA6",
                      fontSize: "25px",
                    }}
                  >
                    COMPLETE
                  </TypographyS>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <BootstrapButton variant="contained" disableRipple>
                      Step
                    </BootstrapButton>
                  </div>
                  <Typography
                    component="div"
                    sx={{
                      fontFamily: "Raleway",
                      fontSize: "12px",
                      fontWeight: "bold",
                      padding: "20px 0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Completion & Submission
                  </Typography>
                  <Typography
                    component="div"
                    sx={{
                      fontFamily: "Raleway",
                      fontSize: "12px",
                      padding: "20px 0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Once you are satisfied with the design, I now enter the last
                    stage of the project. I polish off the final product/design
                    to ready it for turnover and ask you to send the remainder
                    of the payment.
                  </Typography>
                  <Divider />
                  <Typography
                    component="div"
                    sx={{
                      fontFamily: "Raleway",
                      fontSize: "12px",
                      padding: "20px 0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Milestones Involved
                  </Typography>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <ul>
                      <li>Polishing of design output(s)</li>
                      <li>50% Remainder Payment</li>
                      <li>Transfer and turn-over of files</li>
                      <li>Feedback and Review</li>
                    </ul>
                  </div>

                  <Typography
                    component="div"
                    sx={{
                      fontFamily: "Raleway",
                      fontSize: "12px",
                      padding: "20px 0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Client & Designer Work
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
