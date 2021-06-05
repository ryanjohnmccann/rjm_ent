import React from "react";
import Drawer from "@material-ui/core/Drawer";
import NavBarList from "./NavBarList";

export default function NavBar(props) {
  return (
    <React.Fragment>
      <Drawer
        variant="temporary"
        anchor="left"
        open={props.showNav}
        onClose={props.closeNav}
      >
        <NavBarList />
      </Drawer>
    </React.Fragment>
  );
}
