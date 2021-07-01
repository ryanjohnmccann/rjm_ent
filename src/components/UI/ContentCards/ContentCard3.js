import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import About1 from "../../../assets/About/About1.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
  },
  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
    fontSize: 24,
  },
});

export default function ContentCard3() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <CardMedia>
          <img
            alt="Random Alt"
            src={About1}
            style={{
              height: "165px",
              width: "170px",
              borderRadius: "50%",
              marginLeft: "15.5vmin"
            }}
          />
        </CardMedia>
        <Typography
          className={classes.title}
          color="textPrimary"
          style={{ textAlign: "center" }}
        >
          Ryan McCann
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          style={{ textAlign: "center" }}
        >
          Co-Founder and CTO
        </Typography>
        <Typography
          variant="body1"
          component="p"
        >
          Eiusmod nulla ad anim cupidatat magna nisi laborum amet amet deserunt
          ex proident non dolore. Sunt consectetur incididunt aute amet laboris
          cillum reprehenderit officia fugiat enim excepteur reprehenderit. Ut
          dolor ullamco proident duis minim magna culpa. Incididunt mollit
          labore irure mollit velit ut cillum dolor irure commodo esse
          voluptate. Eiusmod nisi elit voluptate adipisicing aliqua pariatur
          veniam veniam nulla fugiat minim ipsum incididunt. Eu minim nisi aute
          nostrud pariatur adipisicing dolore est fugiat culpa consectetur. Est
          in cupidatat culpa minim id ipsum labore do ad reprehenderit.
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button size="medium">LinkedIn</Button>
        <Button size="medium">Website</Button>
      </CardActions>
    </Card>
  );
}
