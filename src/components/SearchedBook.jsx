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
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { fetchSearchedBook } from "../Featuers/book/BookSlice";
import Skeletons from "./Skeleton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SellIcon from "@mui/icons-material/Sell";
import NotFound from "./NotFound";

function SearchedBook() {
  const location = useLocation();
  const inputVlaue = new URLSearchParams(location.search).get("book");

  const dispatch = useDispatch();

  const searchBook = useSelector((state) => state.book);
  const { data, loading } = searchBook;

  useEffect(() => {
    dispatch(fetchSearchedBook(inputVlaue));
  }, [dispatch, inputVlaue]);

  if (
    data.total === "0" ||
    data.total === "1" ||
    data.total === "2" ||
    data.total === "3" ||
    data.error === "[search] Invalid request"
  ) {
    return <NotFound />;
  }

  if (loading) {
    return <Skeletons />;
  }

  return (
    <Container maxWidth="xl">
      <Divider
        textAlign="left"
        sx={{
          fontSize: "19px",
          fontWeight: "600",
          marginTop: "50px",
          marginBottom: "30px",
        }}
      >
        <Link to="/">
          <Button color="info" variant="contained" size="small">
            <KeyboardBackspaceIcon />
          </Button>
        </Link>
        <br />
        <Chip
          variant="outlined"
          sx={{ bgcolor: "#ececec", mt: "10px" }}
          label={
            <>
              <Typography
                fontWeight={800}
                variant={"subtitle2"}
                pt={"2px"}
                sx={{ color: "#124A72" }}
              >
                <span style={{ color: "#B7225B", fontSize: "15px" }}> Total: </span> {data.total}
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
                xs={6}
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
                    textAlign: "center",
                    boxShadow: "none",
                    marginBottom: "30px",
                    bgcolor: "#FEFEFF",
                  }}
                >
                  <CardMedia
                    className="shadow"
                    sx={{
                      background: "#ececec",
                      borderRadius: "5px",
                      border: "1px solid darkgray",
                    }}
                    component="img"
                    alt="book"
                    height="auto"
                    width="auto"
                    image={item.image}
                  />
                  <Link
                    to={`/book/${isbn13}`}
                    style={{ color: "#124A72", paddingTop: "20px" }}
                  >
                    <Typography
                      height={"95px"}
                      variant="subtitle1"
                      color={"#124A72"}
                      fontWeight={800}
                      pt={"12px"}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                  <Typography variant="h5" color={"#B7225B"} fontWeight={800}>
                    <Chip
                      avatar={
                        <Avatar>
                          <SellIcon fontSize="30px" color="info" />
                        </Avatar>
                      }
                      label={item.price}
                      variant="outlined"
                      sx={{ color: "#B7225B", bgcolor: "#ececec" }}
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
