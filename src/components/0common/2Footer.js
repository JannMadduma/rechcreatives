import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Box,
  Container,
  Grid,
  IconButton,
  styled,
  TextField,
  Typography,
} from "@mui/material";

export default function Footer() {
  const TypographyS = styled(Typography)(() => ({
    padding: "10px",
    textAlign: "left",
    color: "white",
    fontFamily: "Poppins",
    fontWeight: "900",
    fontSize: "50px",
  }));

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#52B0C1",
        }}
      >
        <Container>
          <Grid
            container
            spacing={2}
            sx={{ height: "100%", alignContent: "center", padding: "50px" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContents: "center",
                width: "100%",
              }}
            >
              <Grid item xs={4}>
                <div
                  style={{
                    alignItems: "center",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img style={{ width: "50%" }} alt="" src="img/logo.png" />
                </div>
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <TypographyS>
                    <Typography>Let's Connect!</Typography>
                    <Typography>
                      Feel free to email me at rechcreatives@gmail.com
                      <br /> and check out my social links below!
                    </Typography>
                    <div>
                      <IconButton
                        aria-label="Linkedin.com"
                        onClick={() => window.open("https://www.Linkedin.com")}
                        sx={{ color: "white" }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton
                        aria-label="Facebook.com"
                        onClick={() => window.open("https://www.Facebook.com")}
                        sx={{ color: "white" }}
                      >
                        <FacebookIcon />
                      </IconButton>
                      <IconButton
                        aria-label="GitHub.com"
                        onClick={() => window.open("https://www.GitHub.com")}
                        sx={{ color: "white" }}
                      >
                        <GitHubIcon />
                      </IconButton>
                      <IconButton
                        aria-label="Twitter.com"
                        onClick={() => window.open("https://www.Twitter.com")}
                        sx={{ color: "white" }}
                      >
                        <TwitterIcon />
                      </IconButton>
                    </div>
                  </TypographyS>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <TypographyS>
                    <Typography>Get our Monthly FREEBIES here</Typography>
                    <Box
                      sx={{
                        width: 500,
                        maxWidth: "100%",
                      }}
                    >
                      <TextField fullWidth label="fullWidth" id="fullWidth" />
                    </Box>
                  </TypographyS>
                </Box>
              </Grid>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Typography
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                }}
              >
                COPYRIGHT | RECHCREATIVES 2022
              </Typography>
            </div>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
