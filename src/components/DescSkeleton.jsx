import {
  Card,
  Container,
  Grid,
  Skeleton,
} from "@mui/material";
import React from "react";


function DescSkeleton() {
  


  return (
    <Container maxWidth={"500"}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", justifyContent:"center"}}>
      <Skeleton
        variant="rectangular"
        width={"350px"}
        height={"30px"}
        animation={"wave"}
        sx={{ textAlign: "center", mt: "80px"}}
      />

      <Skeleton
        variant="rounded"
        width={"150px"}
        height={"12px"}
        animation={"wave"}
        sx={{ textAlign: "center", mt: "5px"}}
      />
      </div>
      <Grid container alignItems={"center"} justifyContent={"center"} mb={"30px"}>
        <Grid item xs={7} sm={6} md={5} lg={3}
        xl={3} margin={"10px"}>
          
          <Card
            sx={{
              textAlign: "center",
              boxShadow: "none",
              mb: "10px",
            }}
          >
            <Skeleton
              height={"350px"}
              width={"430px"}
              animation={"wave"}
              variant={"rectangular"}
            />

          </Card>
          <Skeleton
              variant="rectangular"
              animation="wave"
              height={"30px"}
              width={"100%"}
            />
        </Grid>
        <Grid item xs={10} sm={10} md={8} lg={6} xl={6}>
            <Skeleton
             variant="rounded"
             height={"310px"}
             width={"600px"}
             animation={"wave"}
             />
          <Skeleton
            variant="rounded"
            height={"10px"}
            width={"40px"}
            animation={"wave"}
            sx={{ textAlign: "left", marginTop: "10px" }}
          />
          <Skeleton
            variant="rounded"
            width={"600px"}
            height={"50px"}
            animation={"wave"}
            sx={{ textAlign: "center", mt: "10px" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default DescSkeleton;
