import {
  Button,
  Card,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchBookDetailes } from "../Featuers/book/BookSlice";
import DescSkeleton from "./DescSkeleton";
import Tableinfo from "./Tableinfo";

function BookDetailes() {
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.book);

  const { isbn13 } = data;

  useEffect(() => {
    dispatch(fetchBookDetailes(id));
  }, []);

  if (loading) {
    return <DescSkeleton />
  }

  return (
    <Container>
      <Typography
        variant="h4"
        width={"100%"}
        fontWeight={"600"}
        textAlign={"center"}
        mt={"100px"}
        sx={{ color: "#114B70" }}
      >
        {data.title}
      </Typography>
      <Typography
        width={"100%"}
        variant="subtitle2"
        pt={"5px"}
        color={"secondary"}
        fontWeight={"600"}
        textAlign={"center"}
        mb={"30px"}
      >
        <Chip
          sx={{ bgcolor: "#f4f4f4", color: "#B7225B" }}
          label={data.subtitle}
        />
      </Typography>
      <Grid container justifyContent={"center"} mb={"30px"} gap={"10px"}>
        <Grid item xs={7} sm={6} md={3} lg={3}
        xl={3}>
          <Card
            sx={{
              textAlign: "center",
              boxShadow: "none",
              background: "#f4f4f4",
              pb: "30px",
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
            {data.pdf ? (
              <a
                href={Object.values(data.pdf)[0]}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    mt: "10px",
                    mb: "10px",
                    width: "65%",
                    alignItems: "center",
                    textAlign: "center",
                    bgcolor: "#B7225B",
                    pt: "3px",
                    pb: "3px",
                    textDecoration: "none",
                  }}
                >
                  Download
                </Button>
              </a>
            ) : (
              <a
                href={`https://itbook.store/go/buy/${isbn13}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{
                    mb: "10px",
                    width: "65%",
                    textAlign: "center",
                    bgcolor: "#B7225B",
                    pt: "3px",
                    pb: "3px",
                    border: "none",
                    fontWeight: "600",
                  }}
                >
                  Buy
                </Button>
              </a>
            )}
          </Card>
        </Grid>
        <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
          <Tableinfo data={data} />
          <Divider
            textAlign="left"
            sx={{
              fontSize: "19px",
              fontWeight: "600",
              marginTop: "10px",
            }}
          >
            <Chip
              sx={{ bgcolor: "#f5f5f5", color: "#124A72" }}
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
