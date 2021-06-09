import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import styles from "./Footer.module.css";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function Footer() {
  function createLink(href, underline, color, text, linkKey, gridKey) {
    return { href, underline, color, text, linkKey, gridKey };
  }

  function createIcon(href, icon, linkKey, gridKey, color) {
    return { href, icon, linkKey, gridKey, color };
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
      "primary"
    ),
    createIcon(
      "https://www.instagram.com",
      <InstagramIcon style={{ fontSize: "50px" }} />,
      "footInstagram",
      "instagramGrid",
      "inherit"
    ),
    createIcon(
      "https://www.youtube.com",
      <YouTubeIcon style={{ fontSize: "50px" }} />,
      "footYouTube",
      "youTubeGrid",
      "secondary"
    ),
    createIcon(
      "https://www.twitter.com",
      <TwitterIcon style={{ fontSize: "50px" }} />,
      "footFaceBook",
      "twitterGrid",
      "primary"
    ),
  ];
  return (
    <footer>
      <Box px={{ xs: 10, sm: 10 }} py={{ xs: 10, sm: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={10} className={styles.mainGrid}>
            {links.map((obj) => (
              <Grid
                item
                className={styles.linkGridItms}
                key={obj.gridKey}
                style={{ paddingTop: "6vh" }}
              >
                <Link
                  href={obj.href}
                  underline={obj.underline}
                  color={obj.color}
                  className={styles.links}
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
                  className={styles.icons}
                  key={obj.linkKey}
                  color={obj.color}
                >
                  {obj.icon}
                </Link>
              </Grid>
            ))}
          </Grid>
          <Box className={styles.rights}>
            &copy; 2021 - All rights reserved RJM Entertainment
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
