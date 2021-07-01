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

const useStyles = makeStyles({
  root: {
    maxWidth: 460,
    maxHeight: 350,
  },
});

export default function ContactLinks() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={0} direction="column">
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <EmailRoundedIcon style={{fontSize: "40px"}} />
              </Grid>
              <Grid item>
                <Typography style={{fontSize: "25px"}}>rjmentertainment@gmail.com</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <PhoneIphoneRoundedIcon style={{fontSize: "40px"}} />
              </Grid>
              <Grid item>
                <Typography style={{fontSize: "25px"}}>(978) 852 - 3328</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <TwitterIcon style={{fontSize: "40px"}}/>
              </Grid>
              <Grid item>
                <Typography style={{fontSize: "25px"}}>Twitter</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <InstagramIcon style={{fontSize: "40px"}}/>
              </Grid>
              <Grid item>
                <Typography style={{fontSize: "25px"}}>Instagram</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
