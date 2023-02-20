import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import PropTypes from "prop-types";

function Search(props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);

  const handleFormSubmit = (e, search) => {
    e.preventDefault();
    if (search.trim() === "") {
      setEmptyInput(true);
      return setTimeout(() => {
        setEmptyInput(false);
      }, 2500);
    }
    const textField = document.getElementById("fullWidth");
    textField.blur();
    navigate(`/search?book=${search.trim()}`);
    return setSearch("");
  };

  function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        "#back-to-top-anchor"
      );

      if (anchor) {
        anchor.scrollIntoView({
          block: "center",
        });
      }
    };

    return (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: "fixed", bottom: 25, right: 20 }}
        >
          {children}
        </Box>
      </Fade>
    );
  }

  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

  return (
    <>
      <Container>
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <Grid
            item
            xs={11}
            sm={8}
            md={8}
            lg={6}
            xl={6}
            mt={"10px"}
            mb={"10px"}
          >
            <Typography
              variant="h5"
              textAlign={"center"}
              color={"#124A72"}
              marginTop={"100px"}
              fontWeight={"600"}
            >
              Welcome to <span style={{ color: "#B7225B" }}>IT</span> Bookstore
              <br />
              <span style={{ color: "#B7225B" }}>IT</span>, Programming and
              Computer Science Books
            </Typography>

            <form
              onSubmit={(e) => handleFormSubmit(e, search)}
              autoComplete="off"
            >
              <TextField
                fullWidth
                sx={{ bgcolor: "#ececec", mt: "10px", width: "100%" }}
                placeholder="Search books by Title or Author..."
                variant="outlined"
                size="small"
                color={!emptyInput ? "info" : "secondary"}
                id="fullWidth"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="info" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <>
                      <InputAdornment position="end">
                        <Typography color="#124A72">|</Typography>
                      </InputAdornment>
                      <InputAdornment position="end">
                        <Button
                          color="info"
                          sx={{ fontWeight: "600", fontSize: "14px" }}
                          onClick={(e) => handleFormSubmit(e, search)}
                        >
                          SEARCH
                        </Button>
                      </InputAdornment>
                    </>
                  ),
                }}
              />
              <Typography
                fontWeight={"600"}
                color={"secondary"}
                sx={{
                  display: !emptyInput ? "none" : "block",
                  fontSize: "12px",
                }}
              >
                please fill the input...
              </Typography>
            </form>
          </Grid>
        </Grid>
        <Toolbar id="back-to-top-anchor" />
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top" color="info">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Container>
    </>
  );
}

export default Search;
