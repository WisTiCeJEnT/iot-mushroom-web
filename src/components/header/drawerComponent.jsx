import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import IconButton from "@material-ui/core/IconButton";
import InvertColorsOffIcon from "@material-ui/icons/InvertColorsOff";
import OpacityIcon from "@material-ui/icons/Opacity";
import ThermometerIcon from "../../assets/icons/thermometer.svg";
const DrawerComponent = ({ handleDrawerClose, open, props }) => {
  const drawerWidth = 240;
  const theme = useTheme();
  const useStyles = makeStyles((theme) => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
  }));
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button key={"temperature"}>
          <ListItemIcon>
            <img src={ThermometerIcon} style={{ width: "1.7rem" }}></img>
          </ListItemIcon>
          <ListItemText primary={"TEMPERATURE"} />
        </ListItem>
        <ListItem button key={"humidity"}>
          <ListItemIcon>
            <OpacityIcon />
          </ListItemIcon>
          <ListItemText primary={"HUMIDITY"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={"configwater"}>
          <ListItemIcon>
            <InvertColorsOffIcon />
          </ListItemIcon>
          <ListItemText primary={"CONFIGURE WATER ON/OFF"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={"history"}>
          <ListItemIcon>
            <DashboardOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={"HISTORY"} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
