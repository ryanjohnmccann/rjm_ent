import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F7F7F7",
    maxWidth: "450px",
    [theme.breakpoints.down(321)]: {
      width: "310px",
    },
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
    // This if statement doesn't work?
    [theme.breakpoints.up(768)]: {
      height: (props) =>
        props.aboutGridKey === "about5Grid" ? "1px" : "280px",
    },
  },
}));

export default function ContentCard3(props) {
  const theme = useTheme();
  const classes = useStyles(theme, props);

  return (
    <Card className={classes.root}>
      <CardContent style={{ backgroundColor: "#F7F7F7" }}>
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
        style={{ justifyContent: "center", backgroundColor: "#F7F7F7" }}
      >
        {props.buttons.map((obj) => (
          <Button size="medium" href={obj.link} target="_blank" key={obj.key}>
            {obj.txt}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
}
