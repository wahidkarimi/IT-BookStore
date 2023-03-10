import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
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
import SellIcon from "@mui/icons-material/Sell";

function TopBooks() {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const { data, loading } = book;

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  if (loading) {
    return <Skeletons />;
  }

  return (
    <>
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
          <Chip
            variant="outlined"
            sx={{ backgroundColor: "#ececec" }}
            label={
              <>
                <span style={{ color: "#B7235A", fontSize: "15px" }}>
                  {" "}
                  New{" "}
                </span>
                <span style={{ color: "#124A72", fontSize: "15px" }}>
                  Releases Books
                </span>
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
                        fontSize={"15px"}
                        color={"#124A72"}
                        fontWeight={800}
                        pt={"12px"}
                      >
                        {item.title}
                      </Typography>
                    </Link>
                    <Typography variant="h4" color={"#B7225B"} fontWeight={900}>
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
    </>
  );
}

export default TopBooks;
