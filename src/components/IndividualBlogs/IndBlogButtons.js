import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import InstagramIcon from "@material-ui/icons/Instagram";
import WebIcon from "@material-ui/icons/Web";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    marginLeft: "1px",
  },
  instaIcon: {
    color: "black",
    fontSize: "27px",
    "&:hover": {
      transition: "0.3s",
      color: "gray",
    },
  },
  webIcon: {
    color: "black",
    fontSize: "27px",
    "&:hover": {
      transition: "0.3s",
      color: "gray",
    },
  },
  linkedIcon: {
    color: "#2867B2",
    fontSize: "27px",
    "&:hover": {
      transition: "0.3s",
      color: "gray",
    },
  },
  moreIcon: {
    color: "black",
    fontSize: "27px",
    "&:hover": {
      transition: "0.3s",
      color: "gray",
    },
  },
}));

export default function IndBlogButtons(props) {
  const classes = useStyles();
  function checkLinks(listOfObjs) {
    let resList = [];
    let i = 0;
    for (i = 0; i < listOfObjs.length; i++) {
      if (listOfObjs[i].label === "insta") {
        resList.push({
          icon: <InstagramIcon className={classes.instaIcon} />,
          link: listOfObjs[i].link,
          linkKey: listOfObjs[i].linkKey,
          gridKey: listOfObjs[i].gridKey,
        });
      } else if (listOfObjs[i].label === "linkedIn") {
        resList.push({
          icon: <LinkedInIcon className={classes.linkedIcon} />,
          link: listOfObjs[i].link,
          key: listOfObjs[i].key,
          linkKey: listOfObjs[i].linkKey,
          gridKey: listOfObjs[i].gridKey,
        });
      } else if (listOfObjs[i].label === "website") {
        resList.push({
          icon: <WebIcon className={classes.webIcon} />,
          link: listOfObjs[i].link,
          linkKey: listOfObjs[i].linkKey,
          gridKey: listOfObjs[i].gridKey,
        });
      } else if (listOfObjs[i].label === "more") {
        resList.push({
          icon: <MoreHorizIcon className={classes.moreIcon} />,
          link: listOfObjs[i].link,
          linkKey: listOfObjs[i].linkKey,
          gridKey: listOfObjs[i].gridKey,
        });
      }
    }
    return resList;
  }
  const links = checkLinks(props.links);
  return (
    <Grid
      container
      item
      spacing={1}
      className={classes.iconContainer}
      xs={12}
      justify="center"
    >
      {links.map((obj) => (
        <Grid item key={obj.gridKey}>
          <Link href={obj.link} target="_blank" key={obj.linkKey}>
            {obj.icon}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
