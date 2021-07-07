import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FBFBFB",
    maxWidth: 450,
    height: "650px",
  },
  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
    fontSize: 24,
  },
  teamImg: {
    height: "175px",
    width: "180px",
    borderRadius: "50%",
  },
  summary: {
    textAlign: "left",
    height: "280px",
  },
});

export default function ContentCard3(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent style={{ backgroundColor: "#FBFBFB" }}>
        <CardMedia>
          <img alt="Random Alt" src={props.img} className={classes.teamImg} />
        </CardMedia>
        <Typography
          className={classes.title}
          color="textPrimary"
          style={{ textAlign: "center" }}
        >
          {props.name}
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          style={{ textAlign: "center" }}
        >
          {props.position}
        </Typography>
        <Typography variant="body1" component="p" className={classes.summary}>
          {props.summary}
        </Typography>
      </CardContent>
      <CardActions
        style={{ justifyContent: "center", backgroundColor: "#FBFBFB" }}
      >
        {props.buttons.map((obj) => (
          <Button size="medium" href={obj.link} key={obj.key}>{obj.txt}</Button>
        ))}
      </CardActions>
    </Card>
  );
}
