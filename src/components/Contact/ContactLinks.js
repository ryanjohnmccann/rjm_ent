import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PhoneIphoneRoundedIcon from "@material-ui/icons/PhoneIphoneRounded";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    [theme.breakpoints.down(321)]: {
      overflow: "auto",
      width: "350px",
    },
    maxHeight: 435,
    backgroundColor: "#EEEEEE",
  },
  emailIcon: {
    fontSize: "40px",
  },
  linkText: {
    color: "black",
    fontSize: "25px",
    "&:hover": {
      transition: "0.3s",
      color: "gray",
    },
    textDecoration: "none",
  },
  iPhoneIcon: {
    fontSize: "40px",
    color: "#BA0C2E",
  },
  twitterIcon: {
    fontSize: "40px",
    color: "#1DA1F2",
  },
  instagramIcon: {
    fontSize: "40px",
  },
}));

export default function ContactLinks() {
  const classes = useStyles();
  const links = {
    email: "https://www.google.com",
    phone: "https://www.google.com",
    twitter: "https://www.google.com",
    instagram: "https://www.google.com",
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid
          container
          spacing={2}
          direction="column"
          justify="center"
          align="center"
        >
          <Grid item>
            <Grid container spacing={1} justify="center" align="center">
              <Grid item>
                <EmailRoundedIcon className={classes.emailIcon} />
              </Grid>
              <Grid item>
                <Typography
                  component="a"
                  href={links.email}
                  target="_blank"
                  className={classes.linkText}
                >
                  rjmcentertainment@gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1} justify="center" align="center">
              <Grid item>
                <PhoneIphoneRoundedIcon className={classes.iPhoneIcon} />
              </Grid>
              <Grid item>
                <Typography
                  component="a"
                  href={links.phone}
                  target="_blank"
                  className={classes.linkText}
                >
                  (978) 867 - 5309
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1} justify="center" align="center">
              <Grid item>
                <TwitterIcon className={classes.twitterIcon} />
              </Grid>
              <Grid item>
                <Typography
                  component="a"
                  href={links.twitter}
                  target="_blank"
                  className={classes.linkText}
                >
                  Twitter
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1} justify="center" align="center">
              <Grid item>
                <InstagramIcon className={classes.instagramIcon} />
              </Grid>
              <Grid item>
                <Typography
                  component="a"
                  href={links.instagram}
                  target="_blank"
                  className={classes.linkText}
                >
                  Instagram
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
