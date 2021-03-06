import React from "react";
import { Link } from "react-router-dom";
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
    [theme.breakpoints.up(768)]: {
      height: "325px",
    },
  },
  link: {
    textDecoration: "none",
  },
}));

export default function ContentCard1(props) {
  const classes = useStyles();
  let url;
  if (props.isBlog) {
    url = `/blogs/${props.pageID}`;
  } else if (props.isWatch) {
    url = `/shows/watch/${props.pageID}`;
  } else if (props.isBlogExp) {
    if (props.readBlog) {
      url = `/blogs/${props.pageID}`;
    } else {
      url = `/blogs/explore/${props.pageID}`;
    }
  } else {
    url = `/shows/${props.pageID}`;
  }
  return (
    <Link to={url} target="_blank" className={classes.link}>
      <Card className={classes.root} style={{ backgroundColor: "#EEEEEE" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.alt}
            height="180"
            image={props.image}
            title={props.title}
          />
          <CardContent style={{ backgroundColor: "#EEEEEE" }}>
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
    </Link>
  );
}
