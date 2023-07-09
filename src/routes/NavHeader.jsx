//react imports
import { useState, useEffect } from "react";

//router
import { Link, Outlet, useLoaderData } from "react-router-dom";

//components
import { ToDoList } from "../ToDoList";

//mui components
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

//material icons
import MenuIcon from "@mui/icons-material/Menu";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

//fetcher
import { roles } from "./controllers/roles";

export async function loader({ request, params }) {
  const response = await roles();
  // console.log(response);
  if (response) return response;
  else return null;
}
const drawerWidth = 240;

const ResponsiveDrawer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const loaderData = useLoaderData();
  const [user, setUser] = useState(
    loaderData.username ? loaderData.username : null
  );
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    setUser(loaderData.username);
  }, [loaderData.username]);



  const UserLinks = user ? (
    <Box>
      <Link to="/roles">
        <Typography>{user}</Typography>
      </Link>
      <Link to="/signout">
        <Typography>Sign Out</Typography>
      </Link>
      <Link to="/createtodo">
        <Typography>Create To-Do</Typography>
      </Link>
      <Link to="/listtodos">
        <Typography>List ToDos</Typography>
      </Link>
    </Box>
  ) : (
    <Box>
      <Link to="/login">
        <Typography>Login</Typography>
      </Link>
      <Link to="/signup">
        <Typography>Sign Up</Typography>
      </Link>
    </Box>
  );
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {UserLinks}
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Link to={"/"}>
            <Typography variant="h6" noWrap component="div">
              Sara AI
            </Typography>
          </Link>
          <IconButton
            color="inherit"
            aria-label="version"
            edge="start"
            onClick={null}
            sx={{ marginLeft: "auto" }}
          >
            <Link to="/version">
              <TextSnippetIcon />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          //   container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};
export { ResponsiveDrawer };
