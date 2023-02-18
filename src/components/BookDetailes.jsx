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
import { Link, useParams } from "react-router-dom";
import { fetchBookDetailes } from "../Featuers/book/BookSlice";
import DescSkeleton from "./DescSkeleton";
import Tableinfo from "./Tableinfo";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

function BookDetailes() {
  const { id } = useParams();
  const navigate = useNavigate();

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
      <Typography
        variant="h4"
        width={"100%"}
        fontWeight={"600"}
        textAlign={"center"}
        mt={"100px"}
        sx={{ color: "#1d556f" }}
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
        mb={"8px"}
      >
        <Chip
          sx={{ bgcolor: "#f4f4f4", color: "#B7225B" }}
          label={data.subtitle}
        />
      </Typography>
      <Typography
        width={"100%"}
        variant="subtitle2"
        pt={"5px"}
        color={"secondary"}
        fontWeight={"600"}
        textAlign={"left"}
        mb={"5px"}
      >
        <Link>
          <Button
            color="info"
            variant="contained"
            size="small"
            onClick={() => navigate(-1)}
          >
            <KeyboardBackspaceIcon />
          </Button>
        </Link>
      </Typography>
      <Grid container alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={7} sm={6} md={5} lg={3} xl={3} margin={"10px"}>
          <Card
            sx={{
              textAlign: "center",
              boxShadow: "none",
              background: "#f4f4f4",
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
                color="secondary"
                sx={{
                  mt: "6px",
                  width: "100%",
                  alignItems: "center",
                  textAlign: "center",
                  bgcolor: "#1d556f",
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
                color="secondary"
                size="large"
                sx={{
                  mb: "6px",
                  width: "100%",
                  textAlign: "center",
                  bgcolor: "#1d556f",
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
        <Grid item xs={10} sm={10} md={8} lg={6} xl={6}>
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
              sx={{ bgcolor: "#f5f5f5", color: "#1d556f" }}
              label="Description"
            />
          </Divider>
          <Typography
            variant="subtitle2"
            fontWeight={"600"}
            sx={{ color: "#1d556f" }}
          >
            {data.desc}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BookDetailes;
