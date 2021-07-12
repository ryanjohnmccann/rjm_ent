import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "left",
    maxWidth: "430px",
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
          <Typography variant="body2" color="textSecondary" component="p">
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
