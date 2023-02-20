import { Chip, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";

function About() {
  return (
    <Container>
      <Grid container alignItems={"center"} justifyContent={"center"} mb={"20px"}>
        <Grid item xs={11} sm={10} md={10} lg={11} xl={12} mt={"90px"}>
        <Divider
          textAlign="left"
          sx={{
            fontWeight: "600",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <Chip
            variant="outlined"
            sx={{ backgroundColor: "#f4f4f4", p: "10px" }}
            label={
              <>
                <span style={{ color: "#B7235A", fontSize: "25px" }}> About </span>
                <span style={{ color: "#124A72", fontSize: "20px" }}>Us</span>
              </>
            }
          />
        </Divider>
          <Typography variant="subtitle1" color={"#124A72"}>
            <span style={{ textAlign: "center", fontSize: "20px", fontWeight: "600", alignItems: "center"}}>Welcome to IT, Programming, and Computer Science Books App! </span><br /> We are a
            one-stop shop for all your IT, Programming, and Computer Science
            book needs. Our app provides an easy way to explore books, search
            for books, and purchase books. We use the latest technologies such
            as <span style={{ color: "#61DBFA"}}>React.js</span>, <span style={{ color:"#B7225B"}}>Redux-Toolkit</span>, <span style={{ color:"#0380C6"}}>Material UI</span>, and our own Bookstore API
            to ensure that you have the best experience possible. Our app is
            designed to make it easy for you to find the perfect book for your
            needs. Whether you’re looking for a beginner’s guide or an advanced
            textbook on a specific topic, we have something for everyone. We
            also offer reviews from other users so that you can get an idea of
            what other people think about the book before making your purchase.
            We strive to provide the best customer service possible and are
            always available to answer any questions or concerns that you may
            have. Thank you for choosing us as your go-to source for IT,
            Programming, and Computer Science books!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
