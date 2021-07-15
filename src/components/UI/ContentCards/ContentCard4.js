import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player/youtube";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#282828",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: "38px",
  },
  details: {
    fontWeight: "bold",
    color: "white",
    fontSize: "16.5px",
  },
  date: {
    paddingTop: "10px",
    color: "white",
  },
}));

export default function ContentTypography4(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <ReactPlayer url={props.url} width="100%" height="550px" />
      </CardActionArea>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}
        >
          {props.mainTitle}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          paragraph
          className={classes.details}
        >
          {props.details}
        </Typography>
        <Typography
          className={classes.date}
          variant="body2"
          align="right"
          color="textSecondary"
          component="p"
        >
          {props.date}
        </Typography>
      </CardContent>
    </Card>
  );
}
