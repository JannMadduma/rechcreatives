import { Box, Container, fontWeight } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "white",
  borderColor: "white",
  color: "black",
  "&:hover": {
    backgroundColor: "white",
    borderColor: "white",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "white",
    borderColor: "white",
  },
  "&:focus": {
    boxShadow: "white",
  },
});

export default function Services2() {
  return (
    <div
      style={{
        backgroundColor: "#EBB6F2",
        height: "100%",
      }}
    >
      <Container
        sx={{ display: "flex", height: 780, marginY: 15, alignItems: "center" }}
      >
        <Box sx={{ margin: 0, padding: 0, width: 450 }}>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#82C8E1 ",
              fontSize: "50px",
            }}
          >
            Digital Products
          </Typography>

          <Typography
            sx={{
              marginBottom: 5,
              fontFamily: "Poppins, sans-serif;",
              fontSize: "20px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            blandit, turpis at porta elementum, velit risus.
          </Typography>

          <List sx={{ width: "100%" }}>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Lorem Ipsum dolor sit amet consectetur." />
            </ListItem>
            <Divider />
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Lorem Ipsum dolor sit amet consectetur." />
            </ListItem>
            <Divider />
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Lorem Ipsum dolor sit amet consectetur." />
            </ListItem>
          </List>
        </Box>

        <Box
          maxWidth={false}
          sx={{
            maxWidth: "650px",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <BootstrapButton variant="contained" disableRipple>
                I NEED THIS
              </BootstrapButton>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
