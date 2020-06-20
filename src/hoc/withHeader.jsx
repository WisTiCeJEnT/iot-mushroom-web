import React from "react";
import AppBarComponent from "../components/header/appBarComponent";
import DrawerComponent from "../components/header/drawerComponent";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { render } from "@testing-library/react";

function withHeader(Component) {
  return function WithHeader() {
    const drawerWidth = 240;
    const useStyles = makeStyles((theme) => ({
      root: {
        display: "flex",
      },
      drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    }));
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBarComponent handleDrawerOpen={handleDrawerOpen} open={open} />
        <DrawerComponent handleDrawerClose={handleDrawerClose} open={open} />
        <div
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <div
            style={{ width: "100%", height: "85vh", border: "0.1px solid red" }}
          >
            <Component />
            {/* main content */}
          </div>
        </div>
      </div>
    );
  };
}

export default withHeader;
