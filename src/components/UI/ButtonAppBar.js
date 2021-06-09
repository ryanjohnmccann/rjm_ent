import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./ButtonAppBar.module.css";
import Drawer from "@material-ui/core/Drawer";
import NavBarList from "./NavBar/NavBarList";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [showNav, setShowNav] = useState({
    leftNav: false,
  });

  const navHandler = (anchor, open) => (event) => {
    if (typeof event === "undefined") {
      // Do nothing
    }
    else if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setShowNav({ ...showNav, [anchor]: open });
    return;
  };

  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={navHandler("leftNav", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
            RJM Entertainment
          </Typography>
        </Toolbar>
      </AppBar>
      {showNav && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={showNav["leftNav"]}
          onClose={navHandler("leftNav", false)}
        >
          <NavBarList buttonClicked={navHandler("leftNav", false)}/>
        </Drawer>
      )}
    </div>
  );
}
