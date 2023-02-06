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
import { Link, useLocation } from "react-router-dom";
import { fetchSearchedBook } from "../Featuers/book/BookSlice";
import Skeletons from "./Skeleton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function SearchedBook() {
  const location = useLocation();
  const inputVlaue = new URLSearchParams(location.search).get("book");

  const dispatch = useDispatch();

  const searchBook = useSelector((state) => state.book);
  const { data, loading } = searchBook;

  console.log(data);
  useEffect(() => {
    dispatch(fetchSearchedBook(inputVlaue));
  }, [dispatch, inputVlaue]);

  if (loading) {
    return <Skeletons />;
  }

  return (
    <Container>
      <Link to="/">
        <Button sx={{ bgcolor: "#f4f4f4" }}>
          <KeyboardBackspaceIcon color="primary" />
        </Button>
      </Link>
      <Divider
        textAlign="left"
        sx={{
          fontSize: "17px",
          fontWeight: "600",
          marginBottom: "30px",
          color: "#114B70",
        }}
      >
        <Chip
          sx={{ bgcolor: "#f4f4f4" }}
          label={
            <>
              <Typography
                fontWeight={800}
                variant={"subtitle2"}
                sx={{ color: "#114B70" }}
                mt={"0px"}
              >
                Total: {data.total}
              </Typography>
            </>
          }
        />
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
                  <CardMedia
                    sx={{ background: "whiteSmoke", borderRadius: "5px" }}
                    component="img"
                    alt="book"
                    height="auto"
                    width="auto"
                    image={item.image}
                  />
                  <Link  to={`/book/${isbn13}`} style={{ color: "#114B70", paddingTop: "20px" }}>
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
                      sx={{ color: "#B7225B", bgcolor: "#f4f4f4" }}
                    />
                  </Typography>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}

export default SearchedBook;
