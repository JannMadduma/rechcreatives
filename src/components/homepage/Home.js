import { Box, Container, Divider, Grid, Typography } from "@mui/material";

export default function Home() {
    return (
      <div
        style={{
          backgroundColor: '#D3B3F2',
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
            <Grid
              container
              spacing={2}
              sx={{ height: "100%", alignContent: "center" }}
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
                    <Typography
                      component="h34"
                      variant="h4"
                      align="left"
                      color="text.primary"
                      sx={{
                        color: "#353C42",
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif;",
                      }}
                    >
                      WELCOME
                    </Typography>
                    <Typography
                      component="h2"
                      variant="h2"
                      align="left"
                      color="text.primary"
                      gutterBottom
                      sx={{
                        fontSize: "80px",
                        color: "#82C8E1",
                        fontWeight: "bold",
                      }}
                    >
                      Hi, I am Rech
                    </Typography>
                    <Divider color="#02B4FE" variant="fullWidth" />
                    <br />
                    <Typography
                      variant="h6"
                      align="left"
                      color="text.secondary"
                      paragraph
                    >
                      I create business templates to help start-ups, service-based, and digital business owners save time, start their businesses without having to start from scratch, and present their businesses professionally online.
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