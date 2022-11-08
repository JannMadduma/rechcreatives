import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Container from "@mui/material/Container";
import { IconButton } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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

function SwipeableTextMobileStepper() {
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
        <Container>
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
            <AutoPlaySwipeableViews
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
            </AutoPlaySwipeableViews>
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
        </Container>
      </Box>
    </div>
  );
}

export default SwipeableTextMobileStepper;
