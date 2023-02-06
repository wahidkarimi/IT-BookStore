import React from "react";
import { Card, Container, Divider, Grid, Skeleton } from "@mui/material";
import { useMatch } from "react-router-dom";

function Skeletons() {
  const match = useMatch("/");
  return (
    <>
      <Container>
        <Divider
          textAlign="left"
          sx={{ marginTop: "20px", marginBottom: "30px" }}
        >
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="120px"
            height="20px"
          />
        </Divider>
        <Grid container alignItems="center" justifyContent="center">
          {[...Array(match ? 20 : 10)].map((_item) => {
            return (
              <Grid
                item
                xs={5}
                sm={4}
                md={2}
                lg={2}
                margin={"40px"}
              >
                <Card
                  sx={{
                    maxWidth: 225,
                    boxShadow: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width="200px"
                    height="210px"
                    sx={{
                      textAlign: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px"
                    }}
                  />
                  <Skeleton
                    sx={{ mt: "15px" }}
                    variant="rectangular"
                    animation="wave"
                    width="200px"
                    height="20px"
                  />
                  <Skeleton
                    sx={{ mt: "15px" }}
                    variant="rectangular"
                    animation="wave"
                    width="70px"
                    height="20px"
                  />
                  <Skeleton
                    sx={{ mt: "15px" }}
                    variant="rectangular"
                    animation="wave"
                    width="60px"
                    height="20px"
                  />
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default Skeletons;
