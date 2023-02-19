import { Container, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";

function SearchSkeleton() {
  return (
    <div>
      <Container>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          mt={"120px"}
        >
          <Grid item xs={8} sm={8} md={8} lg={6} xl={6} mt={"10px"} mb={"10px"}>
            <Typography textAlign={"center"}>
              <Skeleton
                variant="rounded"
                textAlign={"center"}
                animation={"wave"}
                height={"45px"}
                width={"100%"}
                sx={{ mb: "10px" }}
              />
              <Skeleton
                variant="rectangular"
                textAlign={"center"}
                animation={"wave"}
                height={"30px"}
                width={"100%"}
              />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SearchSkeleton;
