import Navbar from "./components/Navbar";
import {
  Container,
  createTheme,
  Grid,
  Paper,
  Switch,
  ThemeProvider,
} from "@mui/material";
import Search from "./components/Search";
import { Route, Routes, useMatch } from "react-router-dom";
import TopBooks from "./components/TopBooks";
import SearchedBook from "./components/SearchedBook";
import BookDetailes from "./components/BookDetailes";
import { useState } from "react";
import MiniDrawer from "./components/SideBar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: "#fff"
      },
      
      info: {
        main: "#124A72",
      },
      secondary: {
        main: "#B7225B",
      },
      white: {
        main: "white",
      },
      black: {
        main: "black",
      },
    },
    typography: {
      fontFamily: ["Ubuntu", "sans-serif"].join(","),
    },
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: "#124A72",
          },
        },
      },
    },
    
  });

  const match = useMatch("/book/:id");

  return (
    <ThemeProvider theme={theme}>
      {/* <Navbar /> */}

      <Grid sx={{ display: { xs: "block", sm: "flex" } }}>
        <MiniDrawer />
        <main>
        {match ? null : <Search />}
          {/* <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} /> */}
          <Routes>
            <Route path="/" element={<TopBooks />} />
            <Route path="/search" element={<SearchedBook />} />
            <Route path="/book/:id" element={<BookDetailes />} />
          </Routes>
        </main>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
