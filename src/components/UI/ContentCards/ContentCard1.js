import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styles from "./ContentCard1.module.css";

export default function ContentCard1(props) {
  return (
    <Card className={styles.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.alt}
          height="180"
          image={props.image}
          title={props.title}
        />
        <CardContent className={styles.cardContent}>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="p"
            color={props.categoryColor}
          >
            {props.category}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" className={styles.mainTitle}>
            {props.mainTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={styles.cardBody}>
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
