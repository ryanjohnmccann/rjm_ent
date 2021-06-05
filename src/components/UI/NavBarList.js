import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styles from "./NavBarList.module.css"
import HomeIcon from '@material-ui/icons/Home';
import TvIcon from '@material-ui/icons/Tv';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import CreateIcon from '@material-ui/icons/Create';

export default function NavBarList() {
  function createListItems(text, iconType) {
    return { text, iconType }
  }

  const listItems = [
    createListItems("Home", <HomeIcon />),
    createListItems("Shows", <TvIcon />),
    createListItems("Blog", <CreateIcon />),
    createListItems("About", <InfoIcon />),
    createListItems("Contact", <ContactMailIcon />),
  ]

  return (
    <React.Fragment>
      <List className={styles.list}>
        {listItems.map((obj) => (
          <ListItem button key={obj.text}>
            <ListItemIcon>
              {obj.iconType}
            </ListItemIcon>
            <ListItemText primary={obj.text} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
