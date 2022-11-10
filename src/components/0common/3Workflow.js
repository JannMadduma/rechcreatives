import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import * as React from "react";

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
export default function Workflow() {
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
              <Grid item xs={4}>
                <Card
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
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
                      }}
                    >
                      Once you are satisfied with the design, I now enter the
                      last stage of the project. I polish off the final
                      product/design to ready it for turnover and ask you to
                      send the remainder of the payment.
                    </Typography>
                    <Divider />
                    <Typography
                      component="div"
                      sx={{
                        fontFamily: "Raleway",
                        fontSize: "12px",
                        padding: "20px 0",
                      }}
                    >
                      Milestones Involved
                    </Typography>
                    <ul>
                      <li>Polishing of design output(s)</li>
                      <li>50% Remainder Payment</li>
                      <li>Transfer and turn-over of files</li>
                      <li>Feedback and Review</li>
                    </ul>
                    <Typography
                      component="div"
                      sx={{
                        fontFamily: "Raleway",
                        fontSize: "12px",
                        padding: "20px 0",
                      }}
                    >
                      Client & Designer Work
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
