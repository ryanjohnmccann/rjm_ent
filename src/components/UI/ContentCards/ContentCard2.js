import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "left",
    maxWidth: "395px",
  },
  dataStyle: {
    paddingTop: "10px",
  },
}));

export default function ContentCard1(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.alt}
          height="180"
          image={props.image}
          title={props.title}
        />
        <CardContent style={{ backgroundColor: "#FBFBFB" }}>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="p"
            style={{ color: props.categoryColor }}
          >
            {props.category}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {props.mainTitle}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            paragraph
          >
            {props.body}
          </Typography>
          <Divider />
          <Typography
            variant="body2"
            align="right"
            color="textSecondary"
            className={classes.dateStyle}
            component="p"
          >
            {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
