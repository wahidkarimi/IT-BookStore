import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Button,
  Card,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { fetchBooks } from "../Featuers/book/BookSlice";
import { Link } from "react-router-dom";
import Skeletons from "./Skeleton";

function TopBooks() {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const { data, loading } = book;
  console.log(data);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  if (loading) {
    return <Skeletons />;
  }

  return (
    <>
      <Container>
        <Divider
          textAlign="left"
          sx={{
            fontSize: "19px",
            fontWeight: "600",
            marginTop: "45px",
            marginBottom: "30px",
            color: "#495464",
          }}
        >
          <Chip variant="outlined" sx={{ backgroundColor: "#f4f4f4"}} label={<><span style={{ color: "#B7235A" }}> New </span><span style={{ color: "#114B70" }}>Releases Books</span></>} />
        </Divider>
        <Grid container alignItems={"center"} justifyContent={"center"}>
          {data.books &&
            data.books.map((item, index) => {
              const { isbn13 } = item;
              return (
                <Grid
                  item
                  xs={5}
                  sm={4}
                  md={2}
                  lg={2}
                  key={index}
                  margin={"40px"}
                >
                  <Card
                    sx={{
                      maxWidth: 225,
                      textAlign: "center",
                      boxShadow: "none",
                      marginBottom: "30px",
                    }}
                  >
                    <CardMedia className="net"
                      sx={{ background: "#f4f4f4", borderRadius: "5px" }}
                      component="img"
                      alt="book"
                      height="auto"
                      width="auto"
                      image={item.image}
                    />
                    <Link to={`/book/${isbn13}`}  style={{ color: "#124A72", paddingTop: "20px" }}>
                    <Typography
                      height={"95px"}
                      variant="subtitle2"
                      color={"#124A72"}
                      fontWeight={800}
                      pt={"12px"}
                    >
                      {item.title}
                    </Typography>
                    </Link>
                    <Typography variant="h6" color={"#B7225B"} fontWeight={800}>
                      <Chip
                        label={item.price}
                        variant="outlined"
                        sx={{ color: "#B7225B", bgcolor: "#f4f4f4" }}
                      />
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
}

export default TopBooks;
