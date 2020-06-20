import React, { useState } from "react";
import AppBarComponent from "./header/appBarComponent";
import DrawerComponent from "./header/drawerComponent";
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <AppBarComponent handleDrawerOpen={handleDrawerOpen} />
      <DrawerComponent handleDrawerClose={handleDrawerClose} open={open} />
    </React.Fragment>
  );
};

export default Header;
