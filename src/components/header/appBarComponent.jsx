import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
const AppBarComponent = ({ handleDrawerOpen, open, props }) => {
  const useStyles = makeStyles((theme) => ({
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    hide: {
      display: "none",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const drawerWidth = 240;
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
      style={{ background: "#e1b382" }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap className={classes.title}></Typography>
        <Button style={{ color: "#ffffff" }}>HISTORY</Button>
        <Button
          style={{ color: "#ffffff" }}
          onClick={() => {
            props.history.push("/login");
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;