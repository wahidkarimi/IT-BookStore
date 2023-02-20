import {
  Button,
  Card,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBookDetailes } from "../Featuers/book/BookSlice";
import DescSkeleton from "./DescSkeleton";
import Tableinfo from "./Tableinfo";


function BookDetailes() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.book);

  const { isbn13 } = data;

  useEffect(() => {
    dispatch(fetchBookDetailes(id));
  }, []);

  if (loading) {
    return <DescSkeleton />;
  }

  return (
    <Container maxWidth={"500"}>
      <Grid container alignItems={"center"} justifyContent={"center"} mb={"30px"}>
        <Grid item xs={11} sm={10} md={10} lg={10} xl={12}>
        <Typography
        variant="h4"
        width={"100%"}
        fontWeight={"600"}
        textAlign={"center"}
        mt={"100px"}
        mb={"10px"}
        sx={{ color: "#124A72" }}
      >
        {data.title}
      </Typography>
    
        </Grid>
        <Grid item xs={11} sm={6} md={5} lg={3} xl={3} margin={"10px"}>
          <Card 
            sx={{
              textAlign: "center",
              boxShadow: "none",
              background: "#ececec",
              mb: "10px",
            }}
          >
            <CardMedia
              component="img"
              alt="book"
              height="auto"
              width="auto"
              image={data.image}
            />
          </Card>
          {data.pdf ? (
            <a
              href={Object.values(data.pdf)[0]}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                color="info"
                sx={{
                  mb: "6px",
                  width: "100%",
                  alignItems: "center",
                  textAlign: "center",
                  bgcolor: "#B7225B",
                  pt: "5px",
                  pb: "5px",
                  textDecoration: "none",
                }}
              >
                Download
              </Button>
            </a>
          ) : (
            <a
              href={`https://itbook.store/go/buy/${isbn13}`}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                color="info"
                size="large"
                sx={{
                  mb: "6px",
                  width: "100%",
                  textAlign: "center",
                  bgcolor: "#B7225B",
                  pt: "5px",
                  pb: "5px",
                  border: "none",
                  fontWeight: "600",
                }}
              >
                Buy
              </Button>
            </a>
          )}
        </Grid>
        <Grid item xs={11} sm={10} md={8} lg={6} xl={6}>
          <Tableinfo data={data} />
          <Divider
            textAlign="left"
            sx={{
              fontSize: "19px",
              fontWeight: "600",
              marginTop: "5px",
            }}
          >
            <Chip
              sx={{ bgcolor: "#ececec", color: "#124A72" }}
              label="Description"
            />
          </Divider>
          <Typography
            variant="subtitle2"
            fontWeight={"600"}
            sx={{ color: "#124A72" }}
          >
            {data.desc}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BookDetailes;
