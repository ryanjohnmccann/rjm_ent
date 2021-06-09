import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import styles from "./NavBarList.module.css";
import HomeIcon from "@material-ui/icons/Home";
import TvIcon from "@material-ui/icons/Tv";
import InfoIcon from "@material-ui/icons/Info";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import CreateIcon from "@material-ui/icons/Create";
import { Link as RouterLink } from "react-router-dom";

export default function NavBarList(props) {
  function createListItems(text, iconType, path) {
    return { text, iconType, path };
  }

  function listItemHandler() {
    props.buttonClicked();
  }

  const listItems = [
    createListItems("Home", <HomeIcon />, "/home"),
    createListItems("Shows", <TvIcon />, "/shows"),
    createListItems("Blog", <CreateIcon />, "/blog"),
    createListItems("About", <InfoIcon />, "/about"),
    createListItems("Contact", <ContactMailIcon />, "/contact"),
  ];

  return (
    <React.Fragment>
      <List className={styles.list}>
        {listItems.map((obj) => (
          <ListItem button component={RouterLink} to={obj.path} key={obj.text} onClick={listItemHandler}>
            <ListItemIcon>{obj.iconType}</ListItemIcon>
            <ListItemText primary={obj.text} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
