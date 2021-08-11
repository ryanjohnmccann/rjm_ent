import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import Fade from "@material-ui/core/Fade";

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
  function createLink(href, fadeKey, underline, color, text, linkKey, gridKey) {
    return { href, fadeKey, underline, color, text, linkKey, gridKey };
  }

  function createIcon(href, fadeKey, icon, linkKey, gridKey, className) {
    return { href, fadeKey, icon, linkKey, gridKey, className };
  }
  const links = [
    createLink(
      "/about",
      "footer-about-effect-key",
      "none",
      "inherit",
      "About",
      "footer-about-link-key",
      "footer-about-grid-key"
    ),
    createLink(
      "/contact",
      "footer-contact-effect-key",
      "none",
      "inherit",
      "Contact",
      "footer-contact-link-key",
      "footer-contact-grid-key"
    ),
  ];
  const icons = [
    createIcon(
      "https://www.facebook.com/RJMC-Entertainment-104107081980025",
      "footer-facebook-effect-key",
      <FacebookIcon style={{ fontSize: "50px" }} />,
      "footer-facebook-link-key",
      "footer-facebook-grid-key",
      classes.facebookIcon
    ),
    createIcon(
      "https://www.instagram.com/rjmcent/",
      "footer-instagram-effect-key",
      <InstagramIcon style={{ fontSize: "50px" }} />,
      "footer-instagram-link-key",
      "footer-instagram-grid-key",
      classes.instagramIcon
    ),
    createIcon(
      "https://www.youtube.com/channel/UCCPrPCBzFwd9PSj7Ffe2u9g",
      "footer-youtube-effect-key",
      <YouTubeIcon style={{ fontSize: "50px" }} />,
      "footer-youtube-link-key",
      "footer-youtube-grid-key",
      classes.youtubeIcon
    ),
    createIcon(
      "https://twitter.com/RJMCEnt",
      "footer-twitter-effect-key",
      <TwitterIcon style={{ fontSize: "50px" }} />,
      "footer-twitter-link-key",
      "footer-twitter-grid-key",
      classes.twitterIcon
    ),
  ];
  return (
    <footer>
      <Box px={{ xs: 10, sm: 10 }} py={{ xs: 10, sm: 10 }}>
        <Grid container spacing={10} className={classes.mainGrid}>
          {links.map((obj) => (
            <Fade in={true} timeout={2000} key={obj.fadeKey}>
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
            </Fade>
          ))}
          {icons.map((obj) => (
            <Fade in={true} timeout={2000} key={obj.fadeKey}>
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
            </Fade>
          ))}
        </Grid>
        <Fade in={true} timeout={2000}>
          <Box className={classes.rights}>
            &copy; 2021 - All rights reserved RJM Entertainment
          </Box>
        </Fade>
      </Box>
    </footer>
  );
}
