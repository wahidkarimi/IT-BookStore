import { createTheme, Grid, ThemeProvider } from "@mui/material";
import Search from "./components/Search";
import { Route, Routes, useMatch } from "react-router-dom";
import TopBooks from "./components/TopBooks";
import SearchedBook from "./components/SearchedBook";
import BookDetailes from "./components/BookDetailes";
import { useState } from "react";
import MiniDrawer from "./components/SideBar";
import About from "./components/About";
import { useEffect } from "react";
import Loader from "./components/Loader";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProgress(false);
    }, 3000);
  }, []);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: "#FEFEFF",
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
        main: "#231F20",
      },
    },
    typography: {
      fontFamily: ["Ubuntu", "sans-serif"].join(","),
    },
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: "#ececec",
          },
        },
      },
    },
  });

  const match = useMatch("/book/:id");
  const about = useMatch("/about");

  return (
    <ThemeProvider theme={theme}>
      {progress ? (
        <Loader />
      ) : (
        <Grid
          justifyContent={"center"}
          sx={{ display: { xs: "block", sm: "flex" } }}
        >
          <MiniDrawer />
          <main>
            {match || about ? null : <Search />}
            <Routes>
              <Route path="/" element={<TopBooks />} />
              <Route path="/search" element={<SearchedBook />} />
              <Route path="/book/:id" element={<BookDetailes />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </Grid>
      )}
    </ThemeProvider>
  );
}

export default App;
