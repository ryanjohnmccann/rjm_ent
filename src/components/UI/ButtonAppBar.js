import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./ButtonAppBar.module.css";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const [showNav, setShowNav] = useState(false);

  function openNavHandler() {
    setShowNav(true);
    return;
  }

  
 function closeNavHandler() {
    setShowNav(false);
    return;
  }

  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={openNavHandler}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
            RJM Entertainment
          </Typography>
        </Toolbar>
      </AppBar>
      {showNav && <NavBar showNav={showNav} closeNav={closeNavHandler} />}
    </div>
  );
}
