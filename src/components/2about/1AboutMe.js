import { Box, Container, Grid, styled, Typography } from "@mui/material";

export default function AboutMe() {
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
      <Box>
        <Container>
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
                      color: "black",
                      fontFamily: "Poppins",
                      fontSize: "20px",
                    }}
                    paragraph
                  >
                    Aside from being a freelance graphic designer, I'm also a
                    business owner selling digital templates for businesses
                    (because I know how challenging and time-consuming it is to
                    start everything from scratch) and a single mother to a
                    6-year-old lovely boy who is the biggest inspiration for me
                    to work hard.
                    <br />
                    <br />
                    As I continue my freelance journey, through my outputs and
                    projects, I hope to help and inspire others. I like to think
                    of my career as one big learning experience that
                    continuously grows with each project and collaboration.
                    <br />
                    <br />
                    Have a look at my past projects, and feel free to reach out
                    with any questions.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "black",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                }}
                paragraph
              >
                I am the creative designer behind RechCreatives.
                <br />
                <br />
                "My mission is to help startups, service-based, and digital
                business owners save time and present their businesses online in
                a remarkable way by creating solid, compelling, and consistent
                graphic design."
                <br />
                <br />I prior to this career, I was E-commerce Virtual Assistant
                for three years which really helped me hone my technical skills
                but, Graphic Designing has always been my passion ever since,
                but I couldn't pursue it because of a lack of skills and
                knowledge. That's why during those years working as a VA I also
                developed my graphic design skills.
              </Typography>
            </Grid>
            <Grid container spacing={2} sx={{ padding: "50px" }}>
              <Grid item xs={6} md={3}>
                <div
                  style={{
                    alignItems: "center",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img style={{ width: "50%" }} src="img/logo.png" />
                </div>
              </Grid>
              <Grid item xs={6} md={3}>
                <div
                  style={{
                    alignItems: "center",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img style={{ width: "50%" }} src="img/logo.png" />
                </div>
              </Grid>
              <Grid item xs={6} md={3}>
                <div
                  style={{
                    alignItems: "center",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img style={{ width: "50%" }} src="img/logo.png" />
                </div>
              </Grid>
              <Grid item xs={6} md={3}>
                <div
                  style={{
                    alignItems: "center",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img style={{ width: "50%" }} src="img/logo.png" />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Typography
            component="div"
            sx={{
              fontFamily: "Raleway",
              fontSize: "12px",
              fontWeight: "bold",
              color: "black",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Completion & Submission
          </Typography>
        </Container>
      </Box>
    </div>
  );
}
