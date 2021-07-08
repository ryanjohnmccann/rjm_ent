import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";

// Handles styling
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    justifyContent: "center",
    fontSize: "30px",
  },
  facebookIcon: {
    color: "#4267B2",
    "&:hover": {
      transition: "0.3s",
      color: "gray",
    },
  },
  instagramIcon: {
    color: "black",
    "&:hover": {
      transition: "0.3s",
      color: "gray",
    },
  },
  youtubeIcon: {
    color: "#FF0000",
    "&:hover": {
      transition: "0.3s",
      color: "gray",
    },
  },
  twitterIcon: {
    color: "#1DA1F2",
    "&:hover": {
      transition: "0.3s",
      color: "gray",
    },
  },
  links: {
    fontFamily: "Roboto",
    "&:hover": {
      transition: "0.3s",
      color: "gray",
    },
  },
  rights: {
    textAlign: "center",
    fontFamily: "Roboto",
    paddingTop: "5vh",
    fontSize: "20px",
  },
}));

export default function Footer() {
  const classes = useStyles();
  function createLink(href, underline, color, text, linkKey, gridKey) {
    return { href, underline, color, text, linkKey, gridKey };
  }

  function createIcon(href, icon, linkKey, gridKey, className) {
    return { href, icon, linkKey, gridKey, className };
  }
  const links = [
    createLink(
      "/contact",
      "none",
      "inherit",
      "Contact",
      "footContactLink",
      "footContactGrid"
    ),
    createLink(
      "/about",
      "none",
      "inherit",
      "About",
      "footAboutLink",
      "footAboutGrid"
    ),
  ];
  const icons = [
    createIcon(
      "https://www.facebook.com",
      <FacebookIcon style={{ fontSize: "50px" }} />,
      "footFaceBook",
      "faceBookGrid",
      classes.facebookIcon
    ),
    createIcon(
      "https://www.instagram.com",
      <InstagramIcon style={{ fontSize: "50px" }} />,
      "footInstagram",
      "instagramGrid",
      classes.instagramIcon
    ),
    createIcon(
      "https://www.youtube.com",
      <YouTubeIcon style={{ fontSize: "50px" }} />,
      "footYouTube",
      "youTubeGrid",
      classes.youtubeIcon
    ),
    createIcon(
      "https://www.twitter.com",
      <TwitterIcon style={{ fontSize: "50px" }} />,
      "footFaceBook",
      "twitterGrid",
      classes.twitterIcon
    ),
  ];
  return (
    <footer>
      <Box px={{ xs: 10, sm: 10 }} py={{ xs: 10, sm: 10 }}>
        <Grid container spacing={10} className={classes.mainGrid}>
          {links.map((obj) => (
            <Grid item key={obj.gridKey} style={{ paddingTop: "48.5px" }}>
              <Link
                href={obj.href}
                underline={obj.underline}
                color={obj.color}
                className={classes.links}
                key={obj.linkKey}
              >
                {obj.text}
              </Link>
            </Grid>
          ))}
          {icons.map((obj) => (
            <Grid item key={obj.gridKey}>
              <Link
                href={obj.href}
                className={obj.className}
                key={obj.linkKey}
                target="_blank"
              >
                {obj.icon}
              </Link>
            </Grid>
          ))}
        </Grid>
        <Box className={classes.rights}>
          &copy; 2021 - All rights reserved RJM Entertainment
        </Box>
      </Box>
    </footer>
  );
}
