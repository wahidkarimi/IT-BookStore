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
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import PropTypes from 'prop-types';

function Search(props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleFormSubmit = (e, search) => {
    e.preventDefault();
    navigate(`/search?book=${search.trim()}`);
    return setSearch("");
  };

  function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
  
      if (anchor) {
        anchor.scrollIntoView({
          block: 'center',
        });
      }
    };
  
    return (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 25, right: 20 }}
        >
          {children}
        </Box>
      </Fade>
    );
  }
  
  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  

  return (
    <>
      <Container>
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <Grid item xs={8} sm={8} md={5} lg={5} xl={5}>
            <Typography
              variant="h6"
              textAlign={"center"}
              color={"#124A72"}
              marginTop={"100px"}
              fontWeight={"600"}
            >
              Welcome to <span style={{ color: "#B7225B"}}>IT</span> Bookstore
              <br />
              <span style={{ color: "#B7225B"}}>IT</span>, Programming and Computer Science Books
            </Typography>

            <form
              onSubmit={(e) => handleFormSubmit(e, search)}
              autoComplete="off"
            >
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#f4f4f4", mt: "10px", color: "#124A72" }}
                  placeholder="Search..."
                  variant="outlined"
                  color="info"
                  size="small"
                  id="fullWidth"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon color="info" />
                      </InputAdornment>
                    ),
                  }}
                />
            </form>
          </Grid>
        </Grid>
        <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top" color='info'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      </Container>
    </>
  );
}

export default Search;
