import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./ContentCard1.module.css";

export default function ContentCard1(props) {
  return (
    <Card className={styles.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.alt}
          height="140"
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="subtitle1"
            color={props.categoryColor}
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
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
