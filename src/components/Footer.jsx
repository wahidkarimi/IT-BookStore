import { Box, Typography } from "@mui/material";
import * as React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub } from "@mui/icons-material";
import log from '../assets/logo-removebg-preview.png'

export default function Footer() {
  return (
    <Box
      sx={{ bgcolor: "#124A72", pt: "10px", pb: "10px", textAlign: "center" }}
    >
      <img src={log} alt="" style={{ width: "130px" }} />
      <Typography
        textAlign={"center"}
        sx={{ color: "whitesmoke", fontSize: "12.5px" }}
      >
        IT Bookstore is developed by WAHID KARIMI for <br /> exploring and
        downloading books. <br />
        <a href="https://www.linkedin.com/in/wahidkarimi/">
          <LinkedInIcon
            sx={{
              color: "#f5f5f5",
              mr: "1%",
              mt: "6px",
              fontSize: "28px",
              "&:hover": {
                color: "#ffff",
              },
            }}
          />
        </a>
        <a href="https://github.com/wahidkarimi">
          <GitHub
            sx={{
              color: "#f5f5f5",
              fontSize: "28px",
              "&:hover": {
                color: "#ffff",
              },
            }}
          />
        </a>
      </Typography>
    </Box>
  );
}
