import {
  Card,
  Container,
  Grid,
  Skeleton,

} from "@mui/material";
import React from "react";


function DescSkeleton() {
  


  return (
    <Container>
      <Skeleton
        variant="rounded"
        width={"200px"}
        height={"20px"}
        animation={"wave"}
        sx={{ textAlign: "center", mt: "40px" }}
      />

      <Skeleton
        variant="rounded"
        width={"150px"}
        height={"12px"}
        animation={"wave"}
        sx={{ textAlign: "center" }}
      />
      <Grid container justifyContent={"center"} mb={"30px"} gap={"10px"}>
        <Grid item xs={7} sm={6} md={3} lg={3}>
          <Card
            sx={{
              textAlign: "center",
              boxShadow: "none",
              background: "whiteSmoke",
              pb: "30px",
              mb: "10px",
            }}
          >
            <Skeleton
              height={"250px"}
              width={"200px"}
              animation={"wave"}
              variant={"rectangular"}
            />

            <Skeleton
              variant="rectangular"
              animation="wave"
              height={"15px"}
              width={"85px"}
            />
          </Card>
        </Grid>
        <Grid item xs={10} sm={10} md={8} lg={8}>
            
          <Skeleton
            variant="rounded"
            height={"10px"}
            width={"40px"}
            animation={"wave"}
            sx={{ textAlign: "left", marginTop: "10px" }}
          />
          <Skeleton
            variant="rounded"
            width={"300px"}
            height={"5px"}
            animation={"wave"}
            sx={{ textAlign: "center" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default DescSkeleton;
