import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container maxWidth={"500"}>
      <Divider
        textAlign="left"
        sx={{
          fontSize: "19px",
          fontWeight: "600",
          marginTop: "50px",
          marginBottom: "30px",
        }}
      >
        <Chip
          variant="outlined"
          sx={{ backgroundColor: "#ececec" }}
          label={
            <>
              <Typography
                fontWeight={800}
                variant={"subtitle2"}
                sx={{ color: "#124A72" }}
              >
                <span style={{ color: "#B7235A" }}> Total: </span>
                <span style={{ color: "#124A72" }}>0</span>
              </Typography>
            </>
          }
        />
      </Divider>
      <Grid container alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={10} sm={10} md={8} lg={7} xl={8} margin={"30px"}>
          <Typography color={"#124A72"} textAlign={"center"}>
            We're sorry, but we couldn't find any programming and computer
            science books that match your search. Please try again with
            different keywords or browse our selection of programming and
            computer science books. <br />
            <Link to="/">
              <Typography color={"#B7225B"} fontWeight="600">Back To Home</Typography>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NotFound;
