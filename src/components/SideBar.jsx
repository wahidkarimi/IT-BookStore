import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from "../assets/logopng.png";
import { ClickAwayListener, Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import { GitHub, LinkedIn } from "@mui/icons-material";

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ bgcolor: "#1d556f" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 1,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"left"}
            sx={{ display: { xs: open ? "none" : "block", sm: "block" }, pt: "8px" }}
          >
            <img src={logo} alt="" width={"200px"} />
          </Grid>
        </Toolbar>
      </AppBar>
      <ClickAwayListener mouseEvent="onMouseDown"
  touchEvent="onTouchStart"
  open={open}
  onClickAway={() => open && setOpen(false)}>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          display: {
            xs: open ? "block" : "none",
            sm: open ? "block" : "block",
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon color="info" />
            ) : (
              <ChevronLeftIcon color="info" />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            {
              value: "Home",
              icon: <HomeIcon />,
              link: "/",
            },
            {
              value: "About",
              icon: <InfoIcon />,
              link: "/about",
            },
          ].map((item) => (
            <ListItem key={item.value} disablePadding sx={{ display: "block" }}>
              <Link
                to={item.link}
                style={{ textDecoration: "none", color: "#495464" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "#1d556f",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.value}
                    sx={{ opacity: open ? 1 : 0, color: "#1d556f" }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <List sx={{ position: "absolute", bottom: "0", width: "100%" }}>
          {[
            {
              value: "GitHub",
              icon: <GitHub />,
              link: "https://github.com/wahidkarimi",
            },
            {
              value: "LinkedIn",
              icon: <LinkedIn />,
              link: "https://www.linkedin.com/in/wahidkarimi/",
            },
          ].map((item) => (
            <ListItem
              key={item.value}
              disablePadding
              sx={{ display: "block", color: "#393E46" }}
            >
              <a
                href={item.link}
                style={{ textDecoration: "none", color: "#495464" }}
                target="_blank"
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "#1d556f",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.value}
                    sx={{ opacity: open ? 1 : 0, color: "#1d556f" }}
                  />
                </ListItemButton>
              </a>
            </ListItem>
          ))}
        </List>
      </Drawer>
      </ClickAwayListener>
    </Box>
  );
}
