import { React, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import NavBarList from "../NavBar/NavBarList";
import Logo from "../../../assets/logo180.png"

// Handles styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#003cb3",
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 10,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  title: {
    flexGrow: 1,
    color: "white",
    textDecoration: "none",
  },
  logo: {
    height: "50px",
    marginRight: theme.spacing(1),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [showNav, setShowNav] = useState({
    leftNav: false,
  });

  // Determines whether the left navigation should be open or not
  const navHandler = (anchor, open) => (event) => {
    if (typeof event === "undefined") {
      // Do nothing
    } else if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setShowNav({ ...showNav, [anchor]: open });
    return;
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
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
          <img src={Logo} alt="RJMC Entertainment Logo" className={classes.logo} />
          <Typography
            variant="h6"
            className={classes.title}
            component="a"
            href="https://www.rjmcentertainment.com/home"
          >
            RJMC Entertainment
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
          <NavBarList buttonClicked={navHandler("leftNav", false)} />
        </Drawer>
      )}
    </div>
  );
}
