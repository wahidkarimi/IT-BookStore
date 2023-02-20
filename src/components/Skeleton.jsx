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
          sx={{
            fontSize: "19px",
            fontWeight: "600",
            marginTop: "50px",
            marginBottom: "30px",
          }}
        >
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="120px"
            height="20px"
          />
        </Divider>
        <Grid container alignItems="center" justifyContent="center">
          {[...Array(match ? 20 : 10)].map((_item, index) => {
            return (
              <Grid
                item
                xs={7}
                sm={4}
                md={3}
                lg={2}
                xl={1}
                key={index}
                margin={"30px"}
              >
                <Card
                  sx={{
                    maxWidth: 240,
                    boxShadow: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Skeleton
                    variant="rounded"
                    animation="wave"
                    width="200px"
                    height="210px"
                    sx={{
                      textAlign: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                    }}
                  />
                  <Skeleton
                    sx={{ mt: "15px" }}
                    variant="rounded"
                    animation="wave"
                    width="200px"
                    height="20px"
                  />
                  <Skeleton
                    sx={{ mt: "15px" }}
                    variant="rounded"
                    animation="wave"
                    width="70px"
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
