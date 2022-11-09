import { Box, Container, fontWeight } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
        ></Box>
      </Container>
    </div>
  );
}
