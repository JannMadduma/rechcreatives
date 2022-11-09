import {
  Box,
  Container,
  Divider,
  Grid,
  styled,
  Typography,
} from "@mui/material";

export default function Studio() {
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
            sx={{ height: "100%", alignContent: "center" }}
          >
            <Grid item xs={12}>
              <TypographyS>
                "Good design is good business."
                <br />
                Thomas Watson Jr.
              </TypographyS>
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
                    gutterBottom
                    sx={{
                      textAlign: "left",
                    }}
                  >
                    This is your one-stop creative studio
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
                    ...for all your graphic needs. Rech Creatives understands
                    that design, plays very important of every business, big or
                    small. Additionally, we know how busy you are, so we're here
                    to help.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <img style={{ width: "100%" }} src="img/rech2.png" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
