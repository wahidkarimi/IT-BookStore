import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Grid, Typography } from "@mui/material";
import logo from "../assets/it.png";

export default function Loader() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      textAlign={"enter"}
      position={"absolute"}
      top={"35%"}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="IT"
          style={{ borderRadius: "5px" }}
          width={"auto"}
          height={"auto"}
        />
        <Typography
          fontWeight={"900"}
          mt={"4px"}
          style={{ fontWeight: "900" }}
          variant={"h3"}
          color={"#124A72"}
        >
          Book.Store
        </Typography>
      </div>
      <Box sx={{ width: "160px", mt: "16px" }} textAlign={"center"}>
        <LinearProgress color={"info"} sx={{ textAlign: "center" }} />
      </Box>
    </Grid>
  );
}
