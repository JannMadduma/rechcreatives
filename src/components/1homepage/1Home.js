import {
  Box,
  Container,
  Divider,
  Grid,
  styled,
  Typography,
} from "@mui/material";

export default function Home() {
  const TypographyS = styled(Typography)(() => ({
    padding: "10px",
    textAlign: "center",
    color: "white",
    fontFamily: "Poppins",
    fontWeight: "900",
    fontSize: "50px",
  }));
  return (
    <div>
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Container sx={{ height: "100%" }}>
          <Grid
            container
            spacing={2}
            sx={{ height: "100%", alignContent: "center", paddingTop: "150px" }}
          >
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <img style={{ width: "100%" }} src="img/rech.png" />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  pt: 8,
                  pb: 6,
                }}
              >
                <Box>
                  <TypographyS
                    sx={{
                      display: "flex",
                      "& div": {
                        color: "white",
                        fontFamily: "Poppins",
                        fontWeight: "900",
                        marginRight: "-3px",
                        textShadow: "0px 0px 9px rgb(0 0 0 / 74%)",
                        fontSize: "100px",
                        padding: "0px",
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
                  <TypographyS
                    gutterBottom
                    sx={{
                      textAlign: "left",
                    }}
                  >
                    Hi, I am Rech
                  </TypographyS>

                  <br />
                  <Typography
                    sx={{
                      textAlign: "left",
                      color: "white",
                      fontFamily: "Poppins",
                      fontSize: "25px",
                    }}
                    paragraph
                  >
                    I create business templates to help start-ups,
                    service-based, and digital business owners save time, start
                    their businesses without having to start from scratch, and
                    present their businesses professionally online.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
