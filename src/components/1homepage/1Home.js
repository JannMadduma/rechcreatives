import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Hero() {
  const TypographyS = styled(Typography)(() => ({
    padding: "10px",
    textAlign: "center",
    color: "white",
    fontFamily: "Poppins",
    fontWeight: "900",
    fontSize: "50px",
  }));
  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <Container sx={{ maxWidth: "95%" }} maxWidth={false}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 0 }}
          sx={{
            height: "100%",
            alignContent: "center",
            paddingTop: "200px",
            paddingLeft: "50px",
          }}
        >
          <Grid
            item
            xs={5}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <Box
              sx={{
                width: "85%",
              }}
            >
              <img style={{ width: "100%" }} src="img/rech.png" />
            </Box>
          </Grid>
          <Grid
            item
            xs={7}
            style={{
              padding: "0px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                padding: "0px",
                width: "85%",
              }}
            >
              <Box
                sx={{
                  textAlign: "left",
                  padding: "0px",
                }}
              >
                <TypographyS
                  sx={{
                    display: "flex",
                    marginLeft: "-20px",
                    "& div": {
                      color: "white",
                      fontFamily: "Poppins",
                      fontWeight: "bold",

                      textShadow: "-6px 8px 5px rgba(0,0,0,0.28)",
                      fontSize: "100px",
                      padding: "0px",
                      marginLeft: "-10px",
                      marginRight: "-1px",
                    },
                  }}
                >
                  <div>W</div>
                  <div>E</div>
                  <div>L</div>
                  <div>C</div>
                  <div>O</div>
                  <div>M</div>
                  <div>E</div>
                </TypographyS>
                <br />
                <TypographyS
                  gutterBottom
                  sx={{
                    textAlign: "left",
                    padding: "0px",
                  }}
                >
                  Hi, I am Rech
                </TypographyS>

                <Typography
                  sx={{
                    textAlign: "left",
                    color: "white",
                    fontFamily: "Poppins",
                    fontSize: "25px",
                    padding: "0px",
                    paddingRight: "50px",
                  }}
                  paragraph
                >
                  I create business templates to help start-ups, service-based,
                  and digital business owners save time, start their businesses
                  without having to start from scratch, and present their
                  businesses professionally online.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
